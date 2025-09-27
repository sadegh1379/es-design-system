import { twMerge } from 'tailwind-merge';
import './styles.css';
import { FC } from 'react';

const SkeletonFetchingLoading: FC<Atom.loaders.skeleton> = ({
  children,
  isFetching,
  isLoading,
  className
}) => {
  return (
    <>
      {(isFetching || isLoading) && (
        <div className={twMerge(`relative overflow-hidden`, className)}>
          <div
            className={` w-full h-full absolute  ${
              isFetching && !isLoading ? 'skeletonGradient' : isLoading ? 'skeletonGradient' : ''
            }`}
          />
          {isFetching && !isLoading && <div className={`opacity-80`}>{children}</div>}
          {isLoading && <div className={`opacity-0`}>{children}</div>}
        </div>
      )}
      {!isFetching && !isLoading && children}
    </>
  );
};

export default SkeletonFetchingLoading;
