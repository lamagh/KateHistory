import Parallax, { Layer } from "react-parallax-scroll";
import "./App.css";
import "./css/main.css";
import IntroSection from "./components/IntroSection";
import One_Section from "./components/One_Section";
import Two_Section from "./components/Two_Section";
import Three_Section from "./components/Three_Section";
import Four_Section from "./components/Four_Section";
import Five_Section from "./components/Five_Section";
import Six_Section from "./components/Six_Section";
import Seven_Section from "./components/Seven_Section";
import Eight_Section from "./components/Eight_Section";
import Nine_Section from "./components/Nine_Section";
import Ten_Section from "./components/Ten_Section";
import Eleven_Section from "./components/Eleven_Section";
import Twelve_Section from "./components/Twelve_Section";
import Thirteen_Section from "./components/Thirteen_Section";
import Fourteen_Section from "./components/Fourteen_Section";
import Fifteen_Section from "./components/Fifteen_Section";
import Sixteen_Section from "./components/Sixteen_Section";
import Seventeen_Section from "./components/Seventeen_Section";
import Eighteen_Section from "./components/Eighteen_Section";
import Nineteen_Section from "./components/Nineteen_Section";
import Twenty_Section from "./components/Twenty_Section";
import {
  ScrollingProvider,
  useScrollSections,
  Section,
} from "react-scroll-section";
import Parallax_Section from "./components/Parallax_Section";
import first from "./images/one.png";
import second from "./images/two_img.png";
import third from "./images/three.png";
import fourth from "./images/four.png";
import fifth from "./images/five.png";
import sixth from "./images/six.png";
import seventh from "./images/seven.png";
import eighth from "./images/eight.png";
import ninth from "./images/nine.png";
import tenth from "./images/ten.png";
import eleventh from "./images/eleven.png";
import twelveth from "./images/twelve.png";
import thirteenth from "./images/thirteen.png";
import fourteenth from "./images/fourteen.png";
import fifteenth from "./images/fifteen.png";
import sixteenth from "./images/sixteen.png";
import seventeenth from "./images/seventeen.png";
import eighteenth from "./images/eighteen.png";
import nineteenth from "./images/nineteen.png";
import twenty from "./images/twenty.png";
import mark from "./images/mark.gif";
import oneModal from "./images/modal_img.png";
import twoModal from "./images/twoModal.png";
import threeModal from "./images/threeModal.png";
import fourModal from "./images/fourModal.png";
import Dash from "./components/Dash";

function App() {
  const year = [
    { year: "1968", barSize: false },
    { year: "1970", barSize: true },
    { year: "1978", barSize: true },
    { year: "1979", barSize: false },
    { year: "1980", barSize: true },
    { year: "1988", barSize: true },
    { year: "1991", barSize: false },
    { year: "2005", barSize: true },
    { year: "2010", barSize: true },
    { year: "2018", barSize: false },
    { year: 2021, barSize: true },
  ];

  const yearView = year.map((number, bar, index) => {
    return <Dash year={number.year} isShort={number.barSize} />;
  });

  const parallaxSections = [
    {
      year: 1968,
      sectionClass: "oneIntro",
      sectionText:
        "By establishing the Police Training School in 1966, we aimed to qualify police personnel who became the cornerstone in the development and realization of Dubai Police’s vision. ",
    },

    {
      year: 1968,
      sectionClass: "oneSection",
      innerImage: first,
      lawButton: "Law 1966",
      lawText:
        "We, Rashid bin Saeed Al Maktoum, Ruler of Dubai, issue the following law: ",
      impImg: mark,
      modalImg: oneModal,
    },
    {
      year: 1968,
      sectionClass: "twoIntro",
      sectionText:
        "Under the leadership of H.H Sheikh Rashid bin Saeed Al Maktoum - the Ruler of Dubai, Dubai Police underwent a significant transformation with the appointment of Sheikh Mohammed bin Rashid Al Maktoum as the head of Dubai Police Security and the establishment of the Police Training School.These steps were dedicated to enhancing the security of the Emirate of Dubai, paving the way towards the future.",
    },
    {
      year: 1968,
      sectionClass: "twoSection",
      innerImage: second,
    },
    {
      year: 1970,
      sectionClass: "threeIntro",
      sectionText:
        "The first training course for Dubai Police officers in 1970 took place in the Hashemite Kingdom of Jordan, among them was His Excellency Dhahi Khalfan Tamim.",
    },
    {
      year: 1970,
      sectionClass: "threeSection",
      innerImage: third,
      impImg: mark,
      modalImg: twoModal,
    },
    {
      year: 1978,
      sectionClass: "fourIntro",
      sectionText:
        "The late Sheikh Rashid bin Saeed Al Maktoum, the Ruler of Dubai and Vice President of the United Arab Emirates at that time, witnessed it. ",
    },
    {
      year: 1978,
      sectionClass: "fourSection",
      innerImage: fourth,
    },
    {
      year: 1980,
      sectionClass: "fiveIntro",
      sectionText:
        "Sheikh Mohammed bin Rashid Al Maktoum - Vice President of the United Arab Emirates, Prime Minister, Ruler of Dubai, Minister of Defense in the United Arab Emirates, and during that period, he was also the Chief of Dubai Police Security.  ",
    },
    {
      year: 1980,
      sectionClass: "fiveSection",
      innerImage: fifth,
    },
    {
      year: 1988,
      sectionClass: "sixIntro",
      sectionText:
        "The first graduation from the Police Training School also included the first graduation of 17 police women who contributed to establishing the values of women’s empowerment in Arab society. ",
    },
    {
      year: 1988,
      sectionClass: "sixSection",
      innerImage: sixth,
    },
    {
      year: 1988,
      sectionClass: "sevenSection",
      innerImage: seventh,
    },
    {
      year: 1988,
      sectionClass: "eightSection",
      innerImage: eighth,
    },
    {
      year: 1988,
      sectionClass: "nineSection",
      sectionText:
        "The general graduation at the General Department of Security of Entities, Facilities, and Emergencies. ",
    },
    {
      year: 1988,
      sectionClass: "nineSection",
      innerImage: ninth,
    },

    {
      year: 1988,
      sectionClass: "tenSection",
      innerImage: tenth,
    },
    {
      year: 1988,
      sectionClass: "elevenIntro",
      sectionText:
        " This year 1988, H.H Sheikh Maktoum bin Rashid Al Maktoum, Crown Prince of Dubai, inaugurated the Dubai Police College, heralding a new era in the field of education and security skills. The ceremony witnessed the presence of prominent figures, including H.H Sheikh Khalifa bin Zayed Al Nahyan, Crown Prince of Abu Dhabi ",
    },
    {
      year: 1988,
      sectionClass: "elevenSection",
      innerImage: eleventh,
      impImg: mark,
      modalImg: threeModal,
    },
    {
      year: 1988,
      sectionClass: "twelveIntro",
      sectionText:
        "Dubai Police Academy began implementing a unique legal program in 1987, specifically designed for aspiring students seeking a Bachelor’s degree in Law and a Diploma in Police Sciences. Subsequently, employees who wished to pursue their university studies and obtain a Bachelor’s degree in Law were allowed to enroll, with the aim of making the Student Officer Program the core foundation of this initiative ",
    },
    {
      year: 1988,
      sectionClass: "twelveSection",
      innerImage: twelveth,
      impImg: mark,
      modalImg: fourModal,
    },
    {
      year: 1988,
      sectionClass: "thirteenIntro",
      sectionText: "tabs ABC ",
    },
    {
      year: 1988,
      sectionClass: "thirteenIntro",
      sectionText: "tabs DEF ",
    },
    {
      year: 1988,
      sectionClass: "thirteenSection",
      innerImage: thirteenth,
    },

    {
      year: 1988,
      sectionClass: "fourteenSection",
      innerImage: fourteenth,
      lawButton: "Law 1987",
      lawText:
        "We, Maktoum bin Rashid Al Maktoum, Crown Prince and Deputy Ruler of Dubai, have decided to issue the following law:  ",
    },
    {
      year: 1988,
      sectionClass: "fifteenIntro",
      sectionText:
        "The general graduation at the General Department of Security of Entities, Facilities, and Emergencies. ",
    },
    {
      year: 1988,
      sectionClass: "fifteenSection",
      innerImage: fifteenth,
    },
    {
      year: 1988,
      sectionClass: "sixteenIntro",
      sectionText:
        " We, Maktoum bin Rashid Al Maktoum, the Ruler of Dubai, having reviewed the Police Law of 1966 and its executive regulations, as well as Law No. 1 of 1987 regarding the establishment of the Police College in the Emirate of Dubai and its amendments, and upon the proposal presented to us by the Crown Prince, the Chief of Police and Public Security in Dubai, hereby issue the following law:  ",
      lawName: "Law 2005",
    },
    {
      year: 1988,
      sectionClass: "sixteenIntro",
      sectionText:
        "This law is referred to as “Law No. 11 of 2005 on the Establishment of Dubai Police Academy. Based on the commitment of the leaders to enhance education and develop the profession in the security field in the Emirate of Dubai, Dubai Police Academy celebrated its transformation from a college to an academy by graduating the first cohort of the Master’s program in Law. This event symbolizes the transition and expansion in the mission of the educational institution. ",
    },
    {
      year: 1988,
      sectionClass: "sixteenSection",
      innerImage: sixteenth,
    },
    {
      year: 1988,
      sectionClass: "seventeenIntro",
      sectionText:
        "Dubai Police Academy celebrated the graduation of its inaugural doctoral program in Law. This moment was a pivotal occasion representing the commitment to advanced education in law and police sciences, aiming to become a center for academic excellence and scientific research. ",
    },
    {
      year: 1988,
      sectionClass: "seventeenSection",
      innerImage: seventeenth,
    },
    {
      year: 1988,
      sectionClass: "eighteenIntro",
      sectionText:
        "This year, Dubai Police Academy launched the First Officers’ Candidates Program, reaffirming its support for the female element in the police and security fields. Concurrently with the launch, the Bachelor’s program in Criminal and Security Sciences was approved, reflecting the academy’s commitment to translating strategic directions and preparing for future challenges through academic excellence",
    },
    {
      year: 1988,
      sectionClass: "eighteenSection",
      innerImage: eighteenth,
    },
    {
      year: 1988,
      sectionClass: "nineteenIntro",
      sectionText:
        " H.H. Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum - Crown Prince of Dubai, launches the Bachelor’s Program in Security and Criminal Sciences during the graduation of cadet officers.",
    },
    {
      year: 1988,
      sectionClass: "nineteenSection",
      innerImage: nineteenth,
    },
    {
      year: 1988,
      sectionClass: "twentyIntro",
      sectionText:
        " H.H Sheikh Mohammed bin Rashid Al Maktoum - Vice President, Prime Minister and Ruler of Dubai, and H.H Sheikh Saif bin Zayed Al Nahyan, Deputy Prime Minister and Minister of Interior, attended the “50th Graduation Ceremony”, which included the graduation of the first and second batches of Female cadet officers.",
    },
    {
      year: 1988,
      sectionClass: "twentySection",
      innerImage: twenty,
    },
  ];

  const sections = parallaxSections.map((section, index) => {
    return (
      <Parallax_Section
        sectionClass={section.sectionClass}
        sectionText={section.sectionText}
        innerImage={section.innerImage}
        lawButton={section.lawButton}
        lawText={section.lawText}
        impImg={section.impImg}
        modalImg={section.modalImg}
        lawName={section.lawName}
      />
    );
  });

  return (
    <div className="start">
      <div className="yearWrapper">
        <div className="year_menu">{yearView}</div>
      </div>

      <ScrollingProvider>
        <Parallax>
          <Layer settings={{ speed: 0.2 }}>
            <IntroSection />
          </Layer>

          {sections}
          {/* <secton>
   

    <section id="1968">
    <Layer settings={{ speed: 0.2,}}>
    <One_Section/>
    </Layer>
    </section>

    <section>
    <Layer settings={{ speed: 0.2,}}>
    <Two_Section/>
    </Layer>
    </section>
   
    <section id="1970">
    <Layer settings={{ speed: 0.2,}}>
    <Three_Section/>
    </Layer>
    </section>

    <section id="1978">
    <Layer settings={{ speed: 0.2,}}>
    <Four_Section/>
    </Layer>
    </section>

    <section>
    <Layer settings={{ speed: 0.2,}}>
    <Five_Section/>
    </Layer>
    </section>

    <section>
    <Layer settings={{ speed: 0.2,}}>
    <Six_Section/>
    </Layer>
    </section>

    <section id="1979"> 
    <Layer settings={{ speed: 0.2,}}>
    <Seven_Section/>
    </Layer>
    </section>
   
    <section>
    <Layer settings={{ speed: 0.2,}}>
    <Eight_Section/>
    </Layer>
    </section>

    <section id="1980">
    <Layer settings={{ speed: 0.2,}}>
    <Nine_Section/>
    </Layer>
    </section>

    <section>
    <Layer settings={{ speed: 0.2,}}>
    <Ten_Section/>
    </Layer>
    </section>

    <section id="1988">
    <Layer settings={{ speed: 0.2,}}>
    <Eleven_Section/>
    </Layer>
    </section>

    <section>
    <Layer settings={{ speed: 0.2,}}>
    <Twelve_Section/>
    </Layer>
    </section>

    <section>
    <Layer settings={{ speed: 0.2,}}>
    <Thirteen_Section/>
    </Layer>
    </section>

    <section>
    <Layer settings={{ speed: 0.2,}}>
    <Fourteen_Section/>
    </Layer>
    </section>

    <section  id="1991">
    <Layer settings={{ speed: 0.2,}}>
    <Fifteen_Section/>
    </Layer>
    </section>

    <section id="2005">
    <Layer settings={{ speed: 0.2,}}>
    <Sixteen_Section/>
    </Layer>
    </section>

    <section id="2010">
    <Layer settings={{ speed: 0.2,}}>
    <Seventeen_Section/>
    </Layer>
    </section>

    <section id="2018">
    <Layer settings={{ speed: 0.2,}}>
    <Eighteen_Section/>
    </Layer>
    </section>

    <section>
    <Layer settings={{ speed: 0.2,}}>
    <Nineteen_Section/>
    </Layer>
    </section>

    <section id="2021">
    <Layer settings={{ speed: 0.2,}}>
    <Twenty_Section/>
    </Layer>
    </Section> */}
        </Parallax>
      </ScrollingProvider>
    </div>
  );
}

export default App;
