import { Question } from "../../modules/questions/model/Question";
import axios from "axios";
export const API_CLIENT = {
  get() {
    const questions = [];
    questions.push(new Question(1001, "Two Sum", "Array", "Amazon", "Easy"));
    questions.push(
      new Question(1002, "Fibo", "recursion", "Microsoft", "Easy")
    );
    questions.push(
      new Question(1003, "N-Queen", "Backtracking", "Amazon", "Hard")
    );
    questions.push(
      new Question(1004, "Three Sum", "Array", "Amazon", "Medium")
    );
    return questions;
  },
  async post(URL, data) {
    const response = await axios.post(URL, data);
    return response;
  },
};
