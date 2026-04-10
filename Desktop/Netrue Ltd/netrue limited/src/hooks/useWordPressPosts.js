import { useEffect, useState } from "react";
import { fetchWordPressPosts } from "../services/wordpress";

export function useWordPressPosts(shouldLoad = true) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(shouldLoad);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!shouldLoad) {
      return;
    }

    let isMounted = true;

    async function loadPosts() {
      setIsLoading(true);
      setError("");

      try {
        const remotePosts = await fetchWordPressPosts();
        if (isMounted) {
          setPosts(remotePosts);
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError.message || "Unable to load posts.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, [shouldLoad]);

  return { posts, isLoading, error };
}
