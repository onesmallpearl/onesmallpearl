import { useState } from "react";

export default function App() {
  const [showPost, setShowPost] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <h1>One Small Pearl</h1>
      <p>A soft, minimal blog.</p>

      {showPost ? (
        <>
          <button onClick={() => setShowPost(false)}>Back</button>
          <h2>Welcome to One Small Pearl</h2>
          <p>This is your first blog post.</p>
        </>
      ) : (
        <button onClick={() => setShowPost(true)}>Read First Post</button>
      )}
    </div>
  );
}