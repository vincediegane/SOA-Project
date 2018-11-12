export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    /* // Facultes
    {
      title: true,
      name: 'Facultes',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Facultes',
      url: '/faculte',
      icon: 'icon-drop'
    },
    {
      name: 'New Faculte',
      url: '/faculte/add',
      icon: 'icon-cursor'
    },
    {
      name: 'Edit Faculte',
      url: '/faculte/edit',
      icon: 'icon-pencil'
    },
    {
      name: 'Detail Faculte',
      url: '/faculte/detail',
      icon: 'icon-puzzle'
    },
    // Departements
    {
      title: true,
      name: 'Departements',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Departements',
      url: '/departement',
      icon: 'icon-drop'
    },
    {
      name: 'New Departement',
      url: '/departement/add',
      icon: 'icon-cursor'
    },
    {
      name: 'Edit Departement',
      url: '/departement/edit',
      icon: 'icon-pencil'
    },
    {
      name: 'Detail Departement',
      url: '/departement/detail',
      icon: 'icon-puzzle'
    },
    // Classes
    {
      title: true,
      name: 'Classes',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Classes',
      url: '/classe',
      icon: 'icon-drop'
    },
    {
      name: 'New Classe',
      url: '/classe/add',
      icon: 'icon-cursor'
    },
    {
      name: 'Edit Classe',
      url: '/classe/edit',
      icon: 'icon-pencil'
    },
    {
      name: 'Detail Classe',
      url: '/classe/detail',
      icon: 'icon-puzzle'
    }, */
    // Promotions
    {
      title: true,
      name: 'Promotions',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Promotions',
      url: '/promotion',
      icon: 'icon-drop'
    },
    {
      name: 'New Promotion',
      url: '/promotion/add',
      icon: 'icon-cursor'
    },
    {
      name: 'Edit Promotion',
      url: '/promotion/edit',
      icon: 'icon-pencil'
    },
    {
      name: 'Detail Promotion',
      url: '/promotion/detail',
      icon: 'icon-puzzle'
    },
    // Etudiants
    {
      title: true,
      name: 'Etudiants',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Etudiants',
      url: '/etudiant',
      icon: 'icon-drop'
    },
    {
      name: 'New Etudiant',
      url: '/etudiant/add',
      icon: 'icon-cursor'
    },
    {
      name: 'Edit Etudiant',
      url: '/etudiant/edit',
      icon: 'icon-pencil'
    },
    {
      name: 'Detail Etudiant',
      url: '/etudiant/detail',
      icon: 'icon-puzzle'
    },
    // Maquette
    /* {
      title: true,
      name: 'Maquettes',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Maquettes',
      url: '/maquette',
      icon: 'icon-drop'
    },
    {
      name: 'New Maquette',
      url: '/maquette/add',
      icon: 'icon-cursor'
    },
    {
      name: 'Edit Promotion',
      url: '/maquette/edit',
      icon: 'icon-pencil'
    },
    {
      name: 'Detail Maquette',
      url: '/maquette/detail',
      icon: 'icon-puzzle'
    },
    // Elements Constitutifs
    {
      title: true,
      name: 'Eléments Constitutifs',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'EC',
      url: '/ec',
      icon: 'icon-drop'
    },
    {
      name: 'New EC',
      url: '/ec/add',
      icon: 'icon-cursor'
    },
    {
      name: 'Edit EC',
      url: '/ec/edit',
      icon: 'icon-pencil'
    },
    {
      name: 'Detail EC',
      url: '/ec/detail',
      icon: 'icon-puzzle'
    },
    // Unites De VAleurs
    {
      title: true,
      name: 'Unités De Valeurs',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'UE',
      url: '/ue',
      icon: 'icon-drop'
    },
    {
      name: 'New UE',
      url: '/ue/add',
      icon: 'icon-cursor'
    },
    {
      name: 'Edit UE',
      url: '/ue/edit',
      icon: 'icon-pencil'
    },
    {
      name: 'Detail UE',
      url: '/ue/detail',
      icon: 'icon-puzzle'
    }, */

    // END
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Download CoreUI',
      url: 'http://coreui.io/vue/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Try CoreUI PRO',
      url: 'http://coreui.io/pro/vue/',
      icon: 'icon-layers',
      variant: 'danger'
    }
  ]
}
