export default function Embed() {
  return (
    <div style={{ height: "100vh", width: "100%", border: "none" }}>
      <iframe
        src="/"
        style={{ width: "100%", height: "100%", border: "none" }}
        allow="clipboard-write; camera; microphone"
      />
    </div>
  );
}
