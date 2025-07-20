import useSWR from "swr";

function useBotResponse(userMessage, shouldFetch = false) {
  const MOCK_API_URL =
    "https://mocki.io/v1/2d2e9bf8-e58d-4846-b67c-1ffaecfec634";

  const { data, error, isLoading } = useSWR(
    shouldFetch ? MOCK_API_URL : null,
    null,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    }
  );

  return {
    botResponse: data,
    loading: isLoading,
    error: error,
  };
}
export default useBotResponse;
