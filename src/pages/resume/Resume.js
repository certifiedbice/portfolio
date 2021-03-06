import React,{Component} from 'react';
import Context from '../../masterProvider';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Fade from '../../components/fade/Fade';
import Background from '../../components/background/Background';
import './Resume.css';
export default class Resume extends Component{
	static contextType=Context;
	componentDidMount(){
		// Compensate for content outside the viewport.
		this.context.verticalPadAndScroll();
	}
	render(){
		return(
			<>
				<Background/>
				<main>
					<section id='resume'>
						<div className='group'>
							<div className='item resume-item resume-head'>
								<h2>Resume of Bice</h2>
								<a href={require('../../docs/resume-of-bice.pdf')} id='resume-download-link'>Download</a>
								<h3>Artist&nbsp;&nbsp;&nbsp;&nbsp;Web Designer&nbsp;&nbsp;&nbsp;&nbsp;Web Developer&nbsp;&nbsp;&nbsp;&nbsp;Software Engineer</h3>
							</div>
						</div>
						<div className='group'>
							<div className='item resume-item'>
								<h3>SUMMARY</h3>
								<hr/>
								<p>
									I am a web developer with rich expertise in the field of  I.T. and marketing and have over 16 years’ 
									experience working with technologies like HTML, CSS, Javascript, React, Node &#38; PHP. I hold certifications 
									as a computer and network technician and am disciplined in many forms of art and design. I am a dedicated 
									learner and have a demonstrated aptitude for adaptability which has served me in growing with an ever changing industry.
								</p>
							</div>
						</div>
						<div className='group'>
						<div className='item resume-item'>
								<h3>TECHNICAL SKILLS</h3>
								<hr/>
								<p><span>Front-End:</span> JavaScript, React, Redux, Enzyme, jQuery, HTML5, CSS3, PHP, Wordpress, PostgreSQL.</p>
								<p><span>Back-end:</span> Node.js, MongoDB, Mocha &#38; Chai, Passport, REST APIs 3, LAMP.</p>
								<p><span>Dev Tools:</span> Git, GitHub, Chrome/Firefox Dev Tools, Heroku, Vercel CLI, various IDEs.</p>
								<p>General programming and hardcoding experience in web development and web software engineering, as well as experience and understanding of S.E.O.</p>
								<p>Potent knowledge of system and network administration.</p>
								<p>Strong history of fine art, graphic design and illustration to include 3D modeling and animation.</p>
								<p>Miscellaneous skills include: Small business mgmt., personnel mgmt., advertising &#38; marketing.</p>
							</div>
						</div>
						<div className='group'>
							<div className='item resume-item'>
								<h3>PROJECTS</h3>
								<hr/>
								<div className='resume-item-element'>
									<h4>Evaluable.net</h4>
									<p>Improving hiring practices and job hunting with tools and accountability.</p>
									<p>
										My partner and I are both very excited about this wonderful project. The purpose of which is tools
										begin to address some of the very bad practices that exist within the hiring process these days.
										The project will achieve this through job hunting tools for the job seeker and a database system
										that will serve to provide a measure of accountability on organizations.
									</p>
									<div>
										<ul>
											<li>Tech:  Adobe Photoshop/Illustrator, HTML, CSS, Javascript, React, Node, MySQL, OAuth etc.</li>
											<li>Designed to provide easy to use tools and information for job seekers.</li>
											<li>Accountability through statistical analysis.</li>
											<li>Implemented to be mobile-first and user-friendly so that job seekers can focus on what matters.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>FelonyDiscrimination.org</h4>
									<p>Web based application developed to fight social injustice and affect real change in legislation.</p>
									<p>
										This project represents an opportunity to inform and help others and to affect a real world change 
										that needs to happen. This is a platform for statistics gathering, those statistics will support 
										the need for change in legislature. Building this full stack application has been a challenging 
										growth experience for me which has further advanced my development abilities.
									</p>
									<div>
										<ul>
											<li>Tech:  Adobe Photoshop/Illustrator, HTML, CSS, Javascript, React, Node, PostgreSQL etc.</li>
											<li>Designed to allow users to add to a growing database of organizations that practice this form of discrimination.</li>
											<li>Created to be a valuable source of information in order to help users.</li>
											<li>Implemented to be mobile-first and user-friendly.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>CamasForCannabis.com</h4>
									<p>
										Wordpress based application built to provide information to the people of Camas WA so that they can 
										see the benefits of the proposed change in legislation on the next ballot.
									</p>
									<p>
										Taking part in this project has been a learning experience for me which has allowed me to expand my 
										technical abilities with the Wordpress platform. Quite challenging at times learning the finer points 
										of Wordpress architecture, I have gained valuable insight into developing for this platform which 
										currently powers 30% of existing websites.
									</p>
									<div>
										<ul>
											<li>Tech:  Adobe Photoshop/Illustrator, HTML, CSS, Javascript.</li>
											<li>Designed to allow users to read various studies advocating for and against medicinal and recreational marijuana.</li>
											<li>Tested regularly for performance and SEO.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='group'>
							<div className='item resume-item'>
								<h3>EDUCATION</h3>
								<hr/>
								<div className='resume-item-element'>
									<h4>Thinkful</h4>
									<p>Engineering Immersion</p>
									<div>
										<ul>
											<li>A very challenging program that provided me with a learning platform that closely reflects current standards and 
												workflows found in the I.T. industry.
											</li>
											<li>Skill relevance and advancement achieved through a rigorous program involving technologies such as React and Node.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>Cisco</h4>
									<p>Cisco Certified Entry Network Technician</p>
									<div>
										<ul>
											<li>A challenging but fundamental aspect of internet, this certification serves me in every facet of my technical profession</li>
											<li>Completed course with a 4.0 GPA</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>Cisco</h4>
									<p>Internet Technology Essentials</p>
									<div>
										<ul>
											<li>Both my ITE and A+ certifications are more fundamental and I am proud to say that my knowledge starts from the ground up.</li>
											<li>Being able to not only diagnose and troubleshoot code, I am capable of diagnosing system level issues.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>CompTIA</h4>
									<p>A+</p>
									<div>
										<ul>
											<li>Both my A+ and ITE certifications are more fundamental and I am proud to say that my knowledge starts from the ground up.</li>
											<li>Gaining this industry level certification has provided me with valuable insight and understanding into computer systems.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>Academy of Art University San Francisco</h4>
									<p>Digital &#38; Fine Art</p>
									<div>
										<ul>
											<li>
												Introduced, studied, and became proficient and knowledgeable in many forms of art such as: Graphic Design, 
												3D Modeling &#38; Animation, Illustration, Fine Art.
											</li>
											<li>My education from this institution has been instrumental in my art and design and has served me well for many years.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='group'>
							<div className='item resume-item'>
								<h3>RELEVANT EXPERIENCE</h3>
								<hr/>
								<div className='resume-item-element'>
									<h4>Camas ACA Political Action Committee</h4>
									<p>02/2020 – Current</p>
									<p>Web Developer</p>
									<div>
										<ul>
											<li>
												Developed this website for an initiative in the city of Camas WA, to petition for change in medical 
												marijuana laws and allow for the retail sales within city limits.
											</li>
											<li>
												Implemented website functionality which serves to inform those interested in learning more as well 
												as to schedule appointments for those wishing to sign up in the petition to alter the legislation.
											</li>
											<li>Created using Wordpress as a platform, in order to quickly deploy and meet the needs of my client.</li>
											<li>Deployed utilizing HTML, CSS, Javascript, PHP, Python, and Wordpress.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>Blacksmith Steel</h4>
									<p>02/2020 – 06/2020</p>
									<p>3D Designer</p>
									<div>
										<ul>
											<li>Creating  a 3D model of a new type of steel production facility with the Blender software v2.8.</li>
											<li>Demonstrates the potential layout of the overall multi structure facility.</li>
											<li>Plans are currently to show the model as a walk-through of the facility as well as be used in marketing material.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>Mad Adds LLC</h4>
									<p>02/2020 – 03/2020</p>
									<p>Web Developer</p>
									<div>
										<ul>
											<li>Developed a customized Wordpress website to meet the startup’s needs.</li>
											<li>Deployed utilizing HTML, CSS, Javascript, PHP, and Wordpress.</li>
											<li>Implemented in a manner that met and exceeded the client's expectations and needs.</li>
											<li>Created with scalability in mind for the future as the business needs grow.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>Self employed</h4>
									<p>09/2014-01/2020</p>
									<p>Artist &#38; Designer</p>
									<div>
										<ul>
											<li>Production of a variety of commissioned work.</li>
											<li>Portraiture for clients.</li>
											<li>Various designs for everything from logos to tattoos.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>Fuegon Spirits</h4>
									<p>01/2013 – 07/2014</p>
									<p>I.T. &#38; Art Director</p>
									<div>
										<ul>
											<li>Design and development of the corporate web presence and I.T. management.</li>
											<li>Responsible for product development, design and management of marketing/advertising materials.</li>
											<li>Maintaining close contact with team members in order to meet challenging deadlines.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>Awsnap LLC</h4>
									<p>01/2011 - 08/2012</p>
									<p>Owner Operator</p>
									<div>
										<ul>
											<li>Built one of the largest used book resale business in the state of California.</li>
											<li>Started in a storage unit and within 2 months was running out of a 1500 square foot warehouse.</li>
											<li>Managed day to day operations as well as employees.</li>
										</ul>
									</div>
								</div>
								<div className='resume-item-element'>
									<h4>U.S. Army</h4>
									<p>09/2004 – 6/2006</p>
									<p>91W - Medic</p>
									<div>
										<ul>
											<li>
												Stationed in San Antonio Texas at B.A.M.C., my duties were daily operations of the General 
												Surgery Clinic, patient care interactions and assisting surgical procedures, management of 
												over a million dollars in critical medical equipment, maintaining industry standard 
												certifications and various Army related duties and training.
											</li>
											<li>Decorations include: National Defense Service Medal, Global War on Terrorism Service Medal, Army Service Ribbon.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
				<Header/>
				<Footer/>
				<Fade location={this.props.location.pathname}/>
			</>
		);
	}
}