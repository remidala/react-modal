// import the Modal component from the react-modal package installed with the command npm install --save react-modal
import Modal from 'react-modal';
import { useState } from 'react';

// connect modal to the main element
Modal.setAppElement('#root');

const AnimalComponent = (props) => {
    const [show, setShow] = useState(false)

    // create and change state value for each modal thats generated for each item in the array
    const toggleModal = () => {
        setShow(!show)
    }

    return (
        <div>
            <h3>{props.animal.name}</h3>
            <button onClick={toggleModal}>Learn More</button>
            <Modal
                isOpen={show}
                onRequestClose={toggleModal}
                className="animalModal"
                overlayClassName="modalOverlay"
            >
                <img src={props.animal.image_link} alt="animal"/>
                <div>
                    <h3>{props.animal.name}</h3>
                    <p>{props.animal.animal_type}</p>
                    <button onClick={toggleModal}>Close Modal</button>
                </div>
            </Modal>
        </div>
    )
}

export default AnimalComponent;