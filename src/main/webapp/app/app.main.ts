import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { EquoidAppModule } from './app.module';
import 'patternfly/dist/js/patternfly-settings.js';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(EquoidAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
