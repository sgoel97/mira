const quizzes = [
  {
    title: "Introduction to Investing",
    link: "how-to-invest",
    db: "howToInvest",
    questions: [
      {
        question: "1. What does it mean to short a stock?",
        answers: [
          "To only pay for part of your stock purchase",
          "To sell stock you don’t own",
          "To sell part of your losing position in a stock",
        ],
        correct: 1,
      },
      {
        question: "2. What are two moderate risk investments? ",
        answers: [
          "Mutual funds index funds",
          "Equity partnerships, real estate, Stocks ",
          "GICs, Government bonds, corporate bonds",
        ],
        correct: 0,
      },
      {
        question: "3. What does it mean to be diversified?",
        answers: [
          "Having as much money in bonds",
          "Owning investments that react differently to market or economic events  ",
          "Owning at least 20 stocks in whatever industry you think will perform best",
        ],
        correct: 1,
      },
      {
        question: "4. What do you get when you buy a share of a mutual fund?",
        answers: [
          "A share of all the investments the fund owns",
          "An ownership stake in the mutual fund company",
          "The right to vote at shareholder meetings for the companies the mutual fund owns",
        ],
        correct: 1,
      },
      {
        question:
          "5. What’s the difference between a Roth and a traditional retirement account?",
        answers: [
          "Roth contributions are after-tax, while traditional retirement contributions are pre-tax",
          "Roth contributions are pre-tax, while traditional retirement contributions are after-tax",
          "Roth are for people who want a non-traditional retirement",
        ],
        correct: 0,
      },
    ],
  },

  {
    title: "Intro to Financial Statements",
    link: "financial",
    db: "financial",
    questions: [
      {
        question: "1. The basic accounting equation is…",
        answers: [
          "Assets = liabilities - shareholder equity ",
          "Assets = liabilities + shareholder equity",
          "Shareholder equity = assets + liabilities",
          "Liabilities = assets + shareholder equity",
        ],
        correct: 1,
      },
      {
        question:
          "2. In an income statement, subtracting the cost of goods sold from the net sales provides the ",
        answers: [
          "Revenue",
          "Gross profit",
          "Net operating income",
          "Net income",
        ],
        correct: 1,
      },
      {
        question: "3. The Balance Sheet…",
        answers: [
          "tracks the movement of cash into (cash inflows) and out of (cash outflows) the company over a specific period of time",
          "shows a 'snapshot' at a particular point in time of what the company has today (assets), how much it owes (liabilities), and what it is currently worth (shareholder equity)",
          "shows whether the difference between revenue (sales) and expenses (costs) is a profit or a loss over a given period",
        ],
        correct: 1,
      },
      {
        question: "4. ____is the movement of cash into and out of a business.",
        answers: ["Cash flow", "Balance sheet", "Income statement"],
        correct: 0,
      },
      {
        question: "5. An income statement is ",
        answers: [
          "A way of listing sales, cost of goods sold and expenses",
          "Another word for gross profit ",
          "Same as the balance sheet",
          "None of the above",
        ],
        correct: 0,
      },
    ],
  },

  {
    title: "Introduction to Ratios",
    link: "ratios",
    db: "ratios",
    questions: [
      {
        question: "What is Net Profit Margin? ",
        answers: [
          "Tells us how effective management is at generating profit on every dollar of sales.",
          "A measure of a company's ability to meet its debt obligations based on its current income.",
          "A measure of the profitability of a corporation in relation to stockholders’ equity.",
          "The company's total sales",
        ],
        correct: 0,
      },
      {
        question: "What is Earnings per Share (EPS)?",
        answers: [
          "Helps investors understand how much money a company makes for each share of its stock. ",
          "The Company's total earnings.",
          "The total losses acquired in a given period of time.",
          "The operating costs of a company.",
        ],
        correct: 0,
      },
      {
        question: "What is the Price to Earnings Ratio (PE)?",
        answers: [
          "Price investors are willing to pay for a $1 of earnings and reflect earnings growth expectations.",
          "The price of the stock at the given market time.",
          "The expected earnings for the following quarter.",
          "The price investors paid when they first purchased the stock. ",
        ],
        correct: 0,
      },
      {
        question: "What is Return on Assets (ROA)?",
        answers: [
          "A measure of profitability and how efficient management is at using assets to generate earnings",
          "Total amount of assets returned at the end of the year to the company.",
          "The amount gained from debt. ",
          "The amount gained from debt and assets. ",
        ],
        correct: 0,
      },
      {
        question: "What is the Current Ratio?",
        answers: [
          "Helps investors understand if a company has the short term resources needed to pay short term debt. ",
          "The current price of the company is divided by a price in another period.",
          "The ratio of total assets divided by the revenue of that year, ",
          "The ratio of the total staff divided by the revenue for that year. ",
        ],
        correct: 0,
      },
    ],
  },

  {
    title: "Company",
    link: "company",
    db: "company",
    questions: [
      {
        question: "What is Net Profit Margin? ",
        answers: [
          "Tells us how effective management is at generating profit on every dollar of sales.",
          "A measure of a company's ability to meet its debt obligations based on its current income.",
          "A measure of the profitability of a corporation in relation to stockholders’ equity.",
          "The company's total sales",
        ],
        correct: 0,
      },
      {
        question: "What is Earnings per Share (EPS)?",
        answers: [
          "Helps investors understand how much money a company makes for each share of its stock. ",
          "The Company's total earnings.",
          "The total losses acquired in a given period of time.",
          "The operating costs of a company.",
        ],
        correct: 0,
      },
      {
        question: "What is the Price to Earnings Ratio (PE)?",
        answers: [
          "Price investors are willing to pay for a $1 of earnings and reflect earnings growth expectations.",
          "The price of the stock at the given market time.",
          "The expected earnings for the following quarter.",
          "The price investors paid when they first purchased the stock. ",
        ],
        correct: 0,
      },
      {
        question: "What is Return on Assets (ROA)?",
        answers: [
          "A measure of profitability and how efficient management is at using assets to generate earnings",
          "Total amount of assets returned at the end of the year to the company.",
          "The amount gained from debt. ",
          "The amount gained from debt and assets. ",
        ],
        correct: 0,
      },
      {
        question: "What is the Current Ratio?",
        answers: [
          "Helps investors understand if a company has the short term resources needed to pay short term debt. ",
          "The current price of the company is divided by a price in another period.",
          "The ratio of total assets divided by the revenue of that year, ",
          "The ratio of the total staff divided by the revenue for that year. ",
        ],
        correct: 0,
      },
    ],
  },

  {
    title: "Investing",
    link: "investing",
    db: "investing",
    questions: [
      {
        question: "What is Net Profit Margin? ",
        answers: [
          "Tells us how effective management is at generating profit on every dollar of sales.",
          "A measure of a company's ability to meet its debt obligations based on its current income.",
          "A measure of the profitability of a corporation in relation to stockholders’ equity.",
          "The company's total sales",
        ],
        correct: 0,
      },
      {
        question: "What is Earnings per Share (EPS)?",
        answers: [
          "Helps investors understand how much money a company makes for each share of its stock. ",
          "The Company's total earnings.",
          "The total losses acquired in a given period of time.",
          "The operating costs of a company.",
        ],
        correct: 0,
      },
      {
        question: "What is the Price to Earnings Ratio (PE)?",
        answers: [
          "Price investors are willing to pay for a $1 of earnings and reflect earnings growth expectations.",
          "The price of the stock at the given market time.",
          "The expected earnings for the following quarter.",
          "The price investors paid when they first purchased the stock. ",
        ],
        correct: 0,
      },
      {
        question: "What is Return on Assets (ROA)?",
        answers: [
          "A measure of profitability and how efficient management is at using assets to generate earnings",
          "Total amount of assets returned at the end of the year to the company.",
          "The amount gained from debt. ",
          "The amount gained from debt and assets. ",
        ],
        correct: 0,
      },
      {
        question: "What is the Current Ratio?",
        answers: [
          "Helps investors understand if a company has the short term resources needed to pay short term debt. ",
          "The current price of the company is divided by a price in another period.",
          "The ratio of total assets divided by the revenue of that year, ",
          "The ratio of the total staff divided by the revenue for that year. ",
        ],
        correct: 0,
      },
    ],
  },
];

// const quizzes = [
//   {
//     title: "How to Invest",
//     questions: [
//       {
//         question:
//           "What is EDITDA most commonly used for in evaluating a company?",
//         answers: ["", "", "", ""],
//         correct: 3,
//       },
//       {
//         question: "",
//         answers: ["", "", "", ""],
//         correct: 3,
//       },
//       {
//         question: "",
//         answers: ["", "", "", ""],
//         correct: 3,
//       },
//     ],
//   },

//   {
//     title: "Company",
//     questions: [
//       {
//         question:
//           "What is EDITDA most commonly used for in evaluating a company?",
//         answers: [
//           "Evaluate which of its products are most successful",
//           "To gauge the company’s overall finanical health and performance. ",
//           "Analyzing a company’s cash flow",
//           "Analyze the quality of a company’s earnings",
//         ],
//         correct: 1,
//       },
//       {
//         question: "",
//         answers: ["", "", "", ""],
//         correct: 3,
//       },
//       {
//         question: "",
//         answers: ["", "", "", ""],
//         correct: 3,
//       },
//     ],
//   },

//   {
//     title: "Investing",
//     questions: [
//       {
//         question:
//           "What is EDITDA most commonly used for in evaluating a company?",
//         answers: ["", "", "", ""],
//         correct: 3,
//       },
//       {
//         question: "",
//         answers: ["", "", "", ""],
//         correct: 3,
//       },
//       {
//         question: "",
//         answers: ["", "", "", ""],
//         correct: 3,
//       },
//     ],
//   },
// ];

export default quizzes;
