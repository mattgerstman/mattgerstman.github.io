import * as React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import profilePic from "../assets/picture.jpg";
import * as styles from "./landing-page.css";

export function LandingPage() {
  return (
    <div>
      <h1>Matthew T Gerstman</h1>
      <div className={styles.body}>
        <img className={styles.profile_pic} src={profilePic} />
        <div>
          <p className={styles.first_paragraph}>
            Hi I'm Matthew (not Matt). I'm a software engineer at Dropbox in
            NYC. Previously I was at TodayTix and before that a startup in
            Silicon Valley. I'm mostly from Florida.
          </p>
          <p>
            I've been described as a{" "}
            <a
              href="https://www.songkick.com/users/matt-gerstman"
              target="_blank"
            >
              concert-goer,
            </a>{" "}
            <Link to="records">vinyl collector,</Link>{" "}
            <a href="http://imgur.com/a/Gi6Pn" target="_blank">
              Harry Potter
            </a>{" "}
            enthusiast, and theater aficionado.
          </p>
          <p>
            <a href="https://twitter.com/matthewgerstman" target="_blank">
              Please follow me on Twitter.
            </a>{" "}
            It makes me happy.
          </p>
          <p>I gave a talk once on functional programming:</p>
          <YouTube
            options={{
              height: "390",
              width: "640"
            }}
            videoId="kkRyjXDpYqg"
          />
        </div>
      </div>
    </div>
  );
}
