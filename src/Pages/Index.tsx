import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const LinkShortener = () => {
  const [link, setLink] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const isValidURL = (str: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  };

  const shortenLink = () => {
    if (link && isValidURL(link)) {
      setError("");
      const shortened = `https://brifli.ly/${Math.random()
        .toString(36)
        .substr(2, 5)}`;
      setShortUrl(shortened);
    } else {
      setError("Please enter a valid URL.");
    }
  };

  const copyToClipboard = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold text-black/75 dark:text-white/75">
          Welcome to Brifli
        </h1>
        <p className="text-gray-500 w-1/2 text-center mt-5">
          Paste all kinds or URL and get a shortened version, within seconds
        </p>
        <div className="mt-20 flex flex-col items-center justify-center w-full max-w-2xl p-4">
          <input
            value={link}
            type="text"
            onChange={(e) => setLink(e.target.value)}
            placeholder="Place Link Here"
            className="w-full p-3 border text-white/50 bg-black/75 dark:bg-slate-800 border-gray-700 text-gray-500 rounded-lg focus:outline-none focus:ring-black"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            onClick={shortenLink}
            className="mt-4 w-1/4 bg-green-800 text-white py-2 px-6 rounded-lg hover:bg-green-900 transition ease-in-out"
          >
            Shorten Link
          </button>
          {shortUrl && (
            <div className="mt-6 p-4  bg-black/75 text-white/50 dark:bg-white/30 backdrop-blur-md rounded-lg flex justify-between items-center w-1/2">
              <span className="text-lg w-40 text-white/50 truncate">
                {shortUrl}
              </span>
              <button
                className="ml-4 text-black/50 hover:text-black/70"
                onClick={copyToClipboard}
              >
                <FaCopy />
              </button>
              {copied && (
                <span className="ml-2 text-sm text-green-500">Copied</span>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LinkShortener;
