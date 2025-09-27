import { FC } from 'react';
import './styles.css';
import { twMerge } from 'tailwind-merge';
import basicLoaderCircle from './styles';

const LoaderCircle: FC<Atom.loaders.circle> = ({
  classNameContainer,
  className,
  size = 'medium',
  variation = 'basic'
}) => {
  type collection = Atom.variantsCollection<Atom.loaders.circle>;

  const variantsContainer: collection = {
    basic: () => twMerge(basicLoaderCircle.styleLoaderCircleContainer(), classNameContainer)
  };

  const variants: collection = {
    basic: () => twMerge(basicLoaderCircle.styleLoaderCircle({ size }), className)
  };

  const variantsInnerSpan: collection = {
    basic: () => basicLoaderCircle.styleLoaderCircleInnerSpan({ size })
  };

  const variantsMiddleSpan: collection = {
    basic: () => basicLoaderCircle.styleLoaderCircleMiddleSpan({ size })
  };

  return (
    <div className={variantsContainer[variation]()}>
      <span className={variants[variation]()}>
        <span className={variantsInnerSpan[variation]()} />

        <span className={variantsMiddleSpan[variation]()}></span>
      </span>
    </div>
  );
};

export default LoaderCircle;
