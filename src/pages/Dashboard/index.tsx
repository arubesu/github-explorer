import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

interface Repository {
  fullname: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddNewRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepository}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepository('');
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddNewRepository}>
        <input
          value={newRepository}
          onChange={e => setNewRepository(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.fullname} href="ref">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.fullname}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
