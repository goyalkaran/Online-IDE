import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_CLIENT } from "../../../shared/services/api-client";
import { Question } from "../components/Question";

export const Questions = () => {
  const params = useLocation();
  console.log("params", params);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const ques = API_CLIENT.get();
    setQuestions(ques);
  }, []);
  const noQuestionsJSX = (
    <tr>
      <td>No Questions</td>
    </tr>
  );
  return (
    <div> welcome {params.state.username}
      Questions
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Tag</th>
            <th>Company Name</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {questions.length === 0
            ? noQuestionsJSX
            : questions.map((question) => <Question ques={question} />)}
        </tbody>
      </table>
    </div>
  );
};
