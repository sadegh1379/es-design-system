import { Spinner } from '@nikaat-crop/es-icons';
import { FC } from 'react';
import './styles.css';

const AnimatedSpinner: FC<Atom.loaders.spinner> = ({ className }) => {
  return <Spinner className={`spinner ${className}`} />;
};

export default AnimatedSpinner;
