import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toaster, toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Button, FeedContainer } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  const [consecutiveClicks, setConsecutiveClicks] = useState(0);

  const handleManyClickAlerts = () => {
    setConsecutiveClicks((prevConsecutiveClicks) => prevConsecutiveClicks + 1);

    if (consecutiveClicks >= 5) {
      Swal.fire({
        title: '<strong>CUIDADO!</strong>',
        icon: 'info',
        html: 'Has dado <strong>5 comentarios seguidos</strong>.<br />¡Agradecemos tus comentarios, Pero por favor NO hagas clics innecesarios!',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
      });
      setConsecutiveClicks(0);
    }
  };

  return (
    <FeedContainer>
      {Object.keys(options).map((option, index) => (
        <Button
          type="button"
          key={index}
          onClick={() => {
            leaveFeedback(option);
            handleManyClickAlerts(option);
            toast('GRACIAS POR TUS COMENTARIOS!', { icon: '👏' });
          }}
        >
          {option}
        </Button>
      ))}
      {/* ConfIguracion de ALERT DE TOAST */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            background: '#007bff',
            color: '#fff',
          },
        }}
      />
    </FeedContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
