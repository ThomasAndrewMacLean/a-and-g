import React from "react";
import Layout from "../components/layout";

const Video = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="pusher">
        <video id="video" controls width="100%">
          <source
            src="https://f000.backblazeb2.com/file/thomasmacleanbucket/agzilles.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </Layout>
  );
};

export default Video;
