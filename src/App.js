// Redering Dynaimc Values and Lists as well as Conditional Rendering
// function App() {
//   const blog = "Blog Post";
//   const blogBody = "This is my Blog Post";
//   const comments = [
//     { id: 1, text: "Comment One" },
//     { id: 2, text: "Comment Two" },
//     { id: 3, text: "Comment Three" },
//   ];

//   let commentsBlock = true;

//   return (
//     <>
//       <h1>{blog}</h1>
//       <p>{blogBody}</p>
//       {commentsBlock && (
//         <div>
//           <h3>Comments</h3>
//           <ul>
//             {comments.map((comment, index) => {
//               return <li key='index'>{comment.text}</li>;
//             })}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <Header text='Feedback UI' /> {/* Passing  a prop to child*/}
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
