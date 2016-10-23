declare module 'react-hot-loader' {
  export class AppContainer extends React.Component<void, void> {}
}

declare namespace HotReload {
  interface Module {
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
    hot: Hot;
  }
  interface Hot {
    accept(dependencies: string[], callback: (updatedDependencies: string[]) => void): void;
    /**
     * Accept code updates for the specified dependencies. The callback is called when dependencies were replaced.
     * @param dependency
     * @param callback
     */
    accept(dependency: string, callback: () => void): void;
    /**
     * Accept code updates for this module without notification of parents.
     * This should only be used if the module doesn’t export anything.
     * The errHandler can be used to handle errors that occur while loading the updated module.
     * @param errHandler
     */
    accept(errHandler?: (err: Error) => void): void;

  }
}

// extend Node `module` types
interface NodeModule extends HotReload.Module {}