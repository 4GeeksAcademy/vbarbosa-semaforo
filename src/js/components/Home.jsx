import React from "react";
import { Luz} from "./Luz";

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
						<div className="btn-group-vertical bg-dark semaforo align-items-center">
							<Luz />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;