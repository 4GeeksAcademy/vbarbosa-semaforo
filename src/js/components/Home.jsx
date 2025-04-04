import React from "react";
import { Semaforo } from "./Semaforo";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-12">
					<div className="position-absolute top-50 start-50 translate-middle">
						<div className="bg-dark topSemaforo mx-auto"></div>
						<div className="bg-dark semaforo mx-auto">
							<div className="luzRoja m-2 mx-auto">
								<Semaforo />
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;