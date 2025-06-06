import headshot from "../images/headshot.jpg";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Resume = () => {
    return (
        <div className="resume">
            <div className="about">
                <img src={headshot} alt="" />
                <div>
                    <p>Hello! I'm Ethan, a multimedia journalist based in central Indiana. I'm deeply interested in exploring the intersection of reporting and information technology, specifically the different ways journalists can package information for audiences. I have experience with photojournalism, web development, design, data visualization and reporting.</p>
                    <div className="contact"><a href="https://www.linkedin.com/in/ethcmoore/" target="blank"><FaLinkedin /></a><a href="mailto:ethcmoore@gmail.com"><FaEnvelope /></a></div>
                </div>
            </div>
            <div className="resumeMain">
                <div>
                    <h1>Education</h1>
                    <section>
                        <h2>Indiana Univeristy — Bloomington <span>May 2025</span></h2>
                        <p>B.A. in Journalism, Minor in web design & development </p>
                        <p>B.S. in Informatics, individualized cognate in Journalism</p>
                    </section>
                </div>
                <div>
                    <h1>Experience</h1>
                    <section>
                        <h2>High School Journalism Institute</h2>
                        <p>Teaching assistant, yearbook <span>summer 2023</span></p>
                        <ul>
                            <li>
                                Led dedicated yearbook editors and staffer members through developing a visual/verbal theme for the coming school year, helping staffs identify stakeholders and make audience-centered design choices.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Indiana Daily Student</h2>
                        <p>Editor-in-chief <span>summer 2022</span></p>
                        <ul>
                            <li>
                                Managed the newsroom of IU’s prestigious student newspaper through historic news events while setting editorial direction, determining content expectations and allocating the publication’s budget.
                            </li>
                            <li>
                                Directed a rotating and mostly virtually staff of roughly 25 reporters and editors through all aspects of creating a weekly paper and posting daily web content which included providing technical guidance in areas like photography, print design, web development and reporting.
                            </li>
                        </ul>
                        <p>Creative director <span>spring 2022</span></p>
                        <ul>
                            <li>
                                Tended to all visual aspects of the publication to ensure a cohesive and engaging visual narrative, prioritizing quality and meaningful visual reportage at all levels of articles.
                            </li>
                            <li>
                                Managed weekly print production from design to content planning to ensure the final product was in line with journalistic and design standards.
                            </li>
                        </ul>
                        <p>Visuals editor <span>fall 2021</span></p>
                        <ul>
                            <li>
                                Paired stories with meaningful visuals, meeting daily publication deadlines and adapting to fast-paced, ever-changing situations.
                            </li>
                            <li>
                                Directed a team of 15 photographers to produce compelling content while providing guidance and feedback.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Themester, IU College of Arts and Sciences</h2>
                        <p>Intern, photography and design <span>fall 2021</span></p>
                        <ul>
                            <li>
                                Documented program events with high-quality photographs and designed visually engaging promotional materials to efficiently communicate the program objectives.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Resume
