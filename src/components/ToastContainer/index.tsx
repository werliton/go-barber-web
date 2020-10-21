import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => (
  <Container>
    <Toast type="error">
      <FiAlertCircle size={20} />

      <div>
        <strong>Aconteceu um erro</strong>
        <p>Ocorreu um erro ao fazer algo</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="info">
      <FiAlertCircle size={20} />

      <div>
        <strong>Aconteceu um erro</strong>
        <p>Ocorreu um erro ao fazer algo</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>
  </Container>
);

export default ToastContainer;
