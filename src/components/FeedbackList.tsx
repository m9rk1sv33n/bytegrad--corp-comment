export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path>
          </svg>
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>ByteGrad</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, labore illum? Fugit adipisci quos eius!
          </p>
        </div>
        <p>4 days ago</p>
      </li>
    </ol>
  );
}
