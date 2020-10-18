import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit"> Pesquisar </button>
    </Form>

    <Repositories>
      <a href="ref">
        <img src="https://i.stack.imgur.com/frlIf.png" alt="Profile" />
        <div>
          <strong>Repository</strong>
          <p>Description</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="ref">
        <img src="https://i.stack.imgur.com/frlIf.png" alt="Profile" />
        <div>
          <strong>Repository</strong>
          <p>Description</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="ref">
        <img src="https://i.stack.imgur.com/frlIf.png" alt="Profile" />
        <div>
          <strong>Repository</strong>
          <p>Description</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
