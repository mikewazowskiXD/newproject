import Spline from "@splinetool/react-spline";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="drip"
        scene="https://prod.spline.design/QF6CvY4FkmfUulGS/scene.splinecode"
      />
      <Content>
        <h1>Virtual Pioneer</h1>
        <center>
          Example sj fdkmfdm dfkmdf dfkdmf dfkmfd frrfrff rrfrfr fr rrrffr frf
          rrfrfr fr rrrffr frrrf frf rrfrfr fr rrrffr frrrf frf rrfrfr fr rrrffr
          frrrf frrrf frfrf rfd
        </center>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Roboto Flex", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .drip {
    position: absolute;
    margin: 0 auto;
    top: 0;
    right: 0;
    left: 0px;

    @media (max-width: 1400px) {
      transform: scale(1) translate(100px);
      right: auto;
      left: 50%;
      margin-left: -690px;
      margin-top: -130px;
    }
    @media (max-width: 1024px) {
      transform: scale(0.8) translate(100px);
      right: auto;
      left: 50%;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translate(100px);
      right: auto;
      left: 50%;
      margin-left: -665px;
      top: -30px;
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translate(100px);
      right: auto;
      left: 50%;
      margin-left: -630px;
    }
    @media (max-width: 375px) {
      transform: scale(0.26) translate(100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
  }
`;

const Content = styled.div`
  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    position: absolute;
    top: 40px;
    font-family: "Roboto Flex", sans-serif;
    font-weight: bold;
    font-size: 70px;
    margin: 0 30px 0 100px;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
    }
    @media (max-width: 375px) {
      font-size: 20px;
      max-width: 300px;
    }
  }

  center {
    text-align: center;
    font-weight: normal;
    position: relative;
    top: 1000px;
    font-size: 24px;

    @media (max-width: 1920px) {
      font-size: 21px;
      max-width: 700px;
      top: 750px;
      left: 550px;
    }
    @media (max-width: 1400px) {
      font-size: 16px;
      max-width: 500px;
      left: 400px;
      top: 580px;
    }
    @media (max-width: 1024px) {
      font-size: 14px;
      max-width: 450px;
      left: 260px;
      top: 530px;
    }
    @media (max-width: 800px) {
      font-size: 12px;
      max-width: 380px;
      left: 200px;
      top: 500px;
    }
    @media (max-width: 600px) {
      font-size: 12px;
      max-width: 300px;
      left: 150px;
    }
    @media (max-width: 375px) {
      font-size: 10px;
      max-width: 150px;
      left: 50px;
      top: 400px;
    }
  }
`;
