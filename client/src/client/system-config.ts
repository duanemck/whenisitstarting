const barrels: string[] = [
  'app',
  'app/shared',
  'app/schedule',
  'app/search',
  'app/profile',
  /** @cli-barrel */
];

function createPackageConfig(barrelList: string[]): any {
  return barrelList.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    '@angular2-material': {
      map: {
        './button': './button/button.js',
        './card': './card/card.js',
        './checkbox': './checkbox/checkbox.js',
        './input': './input/input.js',
        './progress-circle': './progress-circle/progress-circle.js',
        './sidenav': './sidenav/sidenav.js',
        './toolbar': './toolbar/toolbar.js',
        './list': './list/list.js',
      }
    },
  }, createPackageConfig(barrels)),
  map: {
    '@angular2-material': 'vendor/@angular2-material'
  }
};
