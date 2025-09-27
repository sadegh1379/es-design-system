declare namespace Atom {
  namespace loaders {
    type spinner = Partial<Pick<Atom.shared, 'className'>> & {
      variation?: 'basic';
    };

    type skeleton = Partial<Pick<shared, 'isLoading' | 'isFetching' | 'children'>> & {
      variation?: 'basic';
      className?: string;
    };

    type circle = {
      variation?: 'basic';
      classNameContainer?: string;
      className?: string;
      size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xl';
    };
  }
}
