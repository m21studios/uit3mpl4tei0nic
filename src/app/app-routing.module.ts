import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'slidespage',
    loadChildren: () => import('./slidespage/slidespage.module').then( m => m.SlidespagePageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'registerpage',
    loadChildren: () => import('./registerpage/registerpage.module').then( m => m.RegisterpagePageModule)
  },
  {
    path: 'recoverpage',
    loadChildren: () => import('./recoverpage/recoverpage.module').then( m => m.RecoverpagePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'crudpage',
    loadChildren: () => import('./crudpage/crudpage.module').then( m => m.CrudpagePageModule)
  },
  {
    path: 'mapspage',
    loadChildren: () => import('./mapspage/mapspage.module').then( m => m.MapspagePageModule)
  },
  {
    path: 'slides2page',
    loadChildren: () => import('./slides2page/slides2page.module').then( m => m.Slides2pagePageModule)
  },
  {
    path: 'camerapage',
    loadChildren: () => import('./camerapage/camerapage.module').then( m => m.CamerapagePageModule)
  },
  {
    path: 'gallerypage',
    loadChildren: () => import('./gallerypage/gallerypage.module').then( m => m.GallerypagePageModule)
  },
  {
    path: 'uploadpage',
    loadChildren: () => import('./uploadpage/uploadpage.module').then( m => m.UploadpagePageModule)
  },
  {
    path: 'videopage',
    loadChildren: () => import('./videopage/videopage.module').then( m => m.VideopagePageModule)
  },
  {
    path: 'musicpage',
    loadChildren: () => import('./musicpage/musicpage.module').then( m => m.MusicpagePageModule)
  },
  {
    path: 'newspage',
    loadChildren: () => import('./newspage/newspage.module').then( m => m.NewspagePageModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('./profiles/profiles.module').then( m => m.ProfilesPageModule)
  },
  {
    path: 'profile01',
    loadChildren: () => import('./uiprofiles/profile01/profile01.module').then( m => m.Profile01PageModule)
  },
  {
    path: 'profile02',
    loadChildren: () => import('./uiprofiles/profile02/profile02.module').then( m => m.Profile02PageModule)
  },
  {
    path: 'profile03',
    loadChildren: () => import('./uiprofiles/profile03/profile03.module').then( m => m.Profile03PageModule)
  },
  {
    path: 'profile04',
    loadChildren: () => import('./uiprofiles/profile04/profile04.module').then( m => m.Profile04PageModule)
  },
  {
    path: 'profile05',
    loadChildren: () => import('./uiprofiles/profile05/profile05.module').then( m => m.Profile05PageModule)
  },
  {
    path: 'profile06',
    loadChildren: () => import('./uiprofiles/profile06/profile06.module').then( m => m.Profile06PageModule)
  },
  {
    path: 'profile07',
    loadChildren: () => import('./uiprofiles/profile07/profile07.module').then( m => m.Profile07PageModule)
  },
  {
    path: 'profile08',
    loadChildren: () => import('./uiprofiles/profile08/profile08.module').then( m => m.Profile08PageModule)
  },
  {
    path: 'profile09',
    loadChildren: () => import('./uiprofiles/profile09/profile09.module').then( m => m.Profile09PageModule)
  },
  {
    path: 'profile10',
    loadChildren: () => import('./uiprofiles/profile10/profile10.module').then( m => m.Profile10PageModule)
  },
  {
    path: 'social01',
    loadChildren: () => import('./uisocial/social01/social01.module').then( m => m.Social01PageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then( m => m.SocialPageModule)
  },
  {
    path: 'social02',
    loadChildren: () => import('./uisocial/social02/social02.module').then( m => m.Social02PageModule)
  },
  {
    path: 'social03',
    loadChildren: () => import('./uisocial/social03/social03.module').then( m => m.Social03PageModule)
  },
  {
    path: 'social04',
    loadChildren: () => import('./uisocial/social04/social04.module').then( m => m.Social04PageModule)
  },
  {
    path: 'social05',
    loadChildren: () => import('./uisocial/social05/social05.module').then( m => m.Social05PageModule)
  },
  {
    path: 'social06',
    loadChildren: () => import('./uisocial/social06/social06.module').then( m => m.Social06PageModule)
  },
  {
    path: 'social07',
    loadChildren: () => import('./uisocial/social07/social07.module').then( m => m.Social07PageModule)
  },
  {
    path: 'social08',
    loadChildren: () => import('./uisocial/social08/social08.module').then( m => m.Social08PageModule)
  },
  {
    path: 'social09',
    loadChildren: () => import('./uisocial/social09/social09.module').then( m => m.Social09PageModule)
  },
  {
    path: 'social10',
    loadChildren: () => import('./uisocial/social10/social10.module').then( m => m.Social10PageModule)
  },
  {
    path: 'newsmain',
    loadChildren: () => import('./newsapp/newsmain/newsmain.module').then( m => m.NewsmainPageModule)
  },
  {
    path: 'newstabs',
    loadChildren: () => import('./newsapp/newstabs/newstabs.module').then( m => m.NewstabsPageModule)
  },
  {
    path: 'newshome',
    loadChildren: () => import('./newsapp/newshome/newshome.module').then( m => m.NewshomePageModule)
  },
  {
    path: 'newsdiscover',
    loadChildren: () => import('./newsapp/newsdiscover/newsdiscover.module').then( m => m.NewsdiscoverPageModule)
  },
  {
    path: 'newsbookmark',
    loadChildren: () => import('./newsapp/newsbookmark/newsbookmark.module').then( m => m.NewsbookmarkPageModule)
  },
  {
    path: 'newssettings',
    loadChildren: () => import('./newsapp/newssettings/newssettings.module').then( m => m.NewssettingsPageModule)
  },
  {
    path: 'asphal',
    loadChildren: () => import('./uicolors/asphal/asphal.module').then( m => m.AsphalPageModule)
  },
  {
    path: 'sun',
    loadChildren: () => import('./uicolors/sun/sun.module').then( m => m.SunPageModule)
  },
  {
    path: 'emerald',
    loadChildren: () => import('./uicolors/emerald/emerald.module').then( m => m.EmeraldPageModule)
  },
  {
    path: 'june',
    loadChildren: () => import('./uicolors/june/june.module').then( m => m.JunePageModule)
  },
  {
    path: 'blurple',
    loadChildren: () => import('./uicolors/blurple/blurple.module').then( m => m.BlurplePageModule)
  },
  {
    path: 'tomato',
    loadChildren: () => import('./uicolors/tomato/tomato.module').then( m => m.TomatoPageModule)
  },
  {
    path: 'greek',
    loadChildren: () => import('./uicolors/greek/greek.module').then( m => m.GreekPageModule)
  },
  {
    path: 'watermelon',
    loadChildren: () => import('./uicolors/watermelon/watermelon.module').then( m => m.WatermelonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
