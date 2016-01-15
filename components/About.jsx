import React from 'react';

const About = () => (
	<div className="portfolio-content">
		<div className="jumbotron">
			<div className="container">
				<h1>About</h1>
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-md-8 col-md-offset-2">
					<p>
						Quantum Web Development Ltd. specialise in full stack web development and was established by Gareth Hughes in 2015.
					</p>
					<p>
						Utilising the latest technologies such as AngularJS, React, NodeJS and MongoDB we aim to help you build sophisticated
						applications to fulfil your business requirements. Additionally, by making use of the fantastic tools that are currently
						available, as well understanding current design best practices and the importance of clean coding, we can ensure that
						your new application is easier to maintain.
					</p>
					<h3>Gareth Hughes</h3>
					<img src="http://res.cloudinary.com/gurrkin/image/upload/bo_1px_solid_rgb:000,c_scale,q_100,r_0,w_203/v1447597885/gareth_tnhvg5.png" alt="Gareth Hughes" className="img-responsive img-wrapped-left" />
					<p>
						Having been obsessed with computers from a young age (partly the fault of the <a href="https://en.wikipedia.org/wiki/Playdays">Why-Bird</a>,
						Gareth graduated from the University of Reading in 2006 with a MEng in Computer Science.
					</p>
					<p>
						After university he quickly got a job with <a href="http://gbst.com/">GBST</a> where his solid technical skills were recognised and
						he was tasked with dragging their existing web application into the 21st Century. Eventually, after 8 years and lots of
						cups of coffee, it was time to move on. So with a solid framework in place and a worthy successor trained up, he decided
						to take a short career break to evaluate options and decide on where the future lay.
					</p>
					<p>
						It was then that he discovered the wonderful world of full stack Javascript.
					</p>
					<p>
						After immersing himself for several months in the myriad of new frameworks, tools and other assorted technologies now
						available he decided to establish Quantum Web Development Ltd. and begin a new life contracting in this exciting area...
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default About;
