import React from "react";
import { Questions } from "../../../modules/questions/pages/Questions";
import Header from "../components/header";
import Section from "../components/section";
import {Route, Routes} from 'react-router-dom';
import { ProblemStatement } from "../../../modules/ide/pages/ProblemStatement";
import { ErrorComponent } from "../../../shared/components/ErrorComponent";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/section" element={<Section/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/problemStatement/:qid" element={<ProblemStatement/>}/>
        <Route path="/errorComponents" element={<ErrorComponent/>}/>
      </Routes>
    </div>
  );
};

export default Home;
