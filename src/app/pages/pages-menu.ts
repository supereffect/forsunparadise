import { NbMenuItem } from '@nebular/theme';
import { UserData } from '../@core/data/users';
import { LayoutService } from '../@core/utils';
export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: '',
    link: '/pages/dashboard',
    home: true,
  },
 
  
  {
    title:'Özgeçmişlerim',
    icon: 'home-outline',
    children:[
        {
            title:'Ekle',
            link:'/pages/warning',
        },
        {
          title:'Liste',
          link:'/pages/layout/list',
      },
    ],
  },

  {
    title:'İş Ara',
    icon: 'home-outline',
    children:[
        {
            title:'Ekle',
            link:'/pages/warning',
        },
        {
          title:'Liste',
          link:'/pages/layout/list',
      },
    ],
  },
  /*{
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },*/

 
  
  


];
