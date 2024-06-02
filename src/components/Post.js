const Post = () => {
  return (
    <div className="pb-8 mb-4 m-6 shadow-sm text-base">
      <div className="flex items-center justify-between mb-2 w-full">
        <div className="flex items-center justify-between mb-2">
          <img
            className="h-8 mr-2 rounded-lg object-contain w-8"
            src="/images/profile-image.png"
            alt="Robert Brown"
          />
          <div>
            <span className="font-semibold text-gray-900 text-sm">
              Headding
            </span>
            <p className="text-gray-500 text-sm">
              Mar. 12, 2022
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button type="button" className="flex font-medium items-center text-green-500 text-sm">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 8C4.88903 7.91383 5.41621 7.45654 6.15562 6.94286C7.70922 5.45498 9.04285 3.74245 10.1143 1.85943C10.2489 1.59961 10.4499 1.38232 10.6958 1.2309C10.9417 1.07948 11.2232 0.999657 11.51 1C11.7348 0.999883 11.9571 1.04886 12.1621 1.14369C12.3671 1.23851 12.5501 1.37701 12.6989 1.54997C12.8476 1.72293 12.9588 1.9264 13.0251 2.14685C13.0913 2.36731 13.111 2.59969 13.0829 2.82857L11.6945 6.94286M4 8L1 8V14.5C1 15.3284 1.67157 16 2.5 16V16C3.32843 16 4 15.3284 4 14.5V8ZM10.5 7H15.415C15.7014 7.00011 15.7868 7.01388 16.0409 7.14959C16.2949 7.2853 16.5133 7.48181 16.6776 7.72248C16.8419 7.96314 16.9472 8.24088 16.9847 8.53217C17.0221 8.82347 16.9906 9.11973 16.8928 9.39589L14.7949 15.7959C14.5383 16.5191 14.3681 17 13.1204 17C10.8175 17 8.32926 16.0574 6.44971 15.5253"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="ml-1 mr-1.5">+22</span>
          <button type="button" className="flex font-medium items-center text-green-500 text-sm">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M14 10C13.111 10.0862 12.5838 10.5435 11.8444 11.0571C10.2908 12.545 8.95715 14.2575 7.88565 16.1406C7.75109 16.4004 7.55006 16.6177 7.30417 16.7691C7.05828 16.9205 6.77682 17.0003 6.49003 17C6.26517 17.0001 6.04286 16.9511 5.83787 16.8563C5.63289 16.7615 5.44992 16.623 5.30114 16.45C5.15235 16.2771 5.04115 16.0736 4.97493 15.8531C4.90871 15.6327 4.88898 15.4003 4.91705 15.1714L6.30555 11.0571M14 10L17 10V3.5C17 2.67157 16.3284 2 15.5 2V2C14.6716 2 14 2.67157 14 3.5V10ZM7.5 11H2.58497C2.29857 10.9999 2.21317 10.9861 1.95915 10.8504C1.70513 10.7147 1.48673 10.5182 1.32243 10.2775C1.15814 10.0369 1.0528 9.75912 1.01532 9.46783C0.97785 9.17653 1.00935 8.88027 1.10716 8.60411L3.20505 2.20411C3.46172 1.48091 3.63194 1 4.87962 1C7.18249 1 9.67074 1.94263 11.5503 2.47474"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-gray-400">
        The article covers the essentials, challenges, myths and stages
        the UX designer should consider while creating the design
        strategy...
      </p>
      <button type="button" className="bg-green-500 mt-4 px-4 py-1 rounded-[5px] text-white">
        Read more
      </button>
    </div>
  );
};

export default Post;
