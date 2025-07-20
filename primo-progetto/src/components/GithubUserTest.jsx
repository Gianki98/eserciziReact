import { useState } from "react";
import useGithubUser from "../hooks/useGithubUser";

function GithubUserTest() {
  const [username, setUsername] = useState("octocat");
  const [inputValue, setInputValue] = useState("octocat");
  const { user, loading, error, refetch } = useGithubUser(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Imposta il nuovo username (SWR farà automaticamente la richiesta)
    setUsername(inputValue || null);
  };

  const handleClear = () => {
    // Imposta username a null (nessuna richiesta verrà fatta)
    setUsername(null);
    setInputValue("");
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>GitHub User</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button type="submit">Search</button>
        <button
          type="button"
          onClick={handleClear}
          style={{ marginLeft: "5px" }}
        >
          Clear (null)
        </button>
        <button type="button" onClick={refetch} style={{ marginLeft: "5px" }}>
          Refresh (Manual)
        </button>
      </form>

      {/* Mostra lo stato corrente */}
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "15px",
          fontSize: "14px",
        }}
      >
        <p>
          <strong>Current username:</strong> {username || "null (no request)"}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {loading
            ? "⏳ Loading..."
            : error
            ? "❌ Error"
            : user
            ? "✅ Success (cached by SWR)"
            : "⏸️ No data"}
        </p>
        <p>
          <strong>SWR Features:</strong> Auto-cache, Auto-retry on error, Dedupe
          requests
        </p>
      </div>

      {loading && <div>Loading...</div>}
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          Error: {error.message}
          {error.status && <span> (Status: {error.status})</span>}
        </div>
      )}

      {user && (
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <div>
            <h3>{user.name || "No name"}</h3>
            <p>@{user.login}</p>
            <p>
              Followers: {user.followers} | Following: {user.following}
            </p>
            <p>Public Repos: {user.public_repos}</p>
            {user.bio && <p style={{ fontStyle: "italic" }}>{user.bio}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default GithubUserTest;
