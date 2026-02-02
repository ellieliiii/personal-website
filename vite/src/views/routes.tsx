import React from 'react';

import {
  IndexView,
  Home as HomeView,
  Customers as CustomersView,
  HireUs as HireUsView,
  Faq as FaqView,
  Agency as AgencyView,
  CareerListing as CareerListingView,
  CareerListingMinimal as CareerListingMinimalView,
  CareerOpening as CareerOpeningView,
  ContactPage as ContactPageView,
  Coworking as CoworkingView,
  Elearning as ElearningView,
  Enterprise as EnterpriseView,
  Service as ServiceView,
  WebBasic as WebBasicView,
  DesktopApp as DesktopAppView,
  Expo as ExpoView,
  Startup as StartupView,
  DesignCompany as DesignCompanyView,
  MobileApp as MobileAppView,
  JobListing as JobListingView,
  Rental as RentalView,
  CloudHosting as CloudHostingView,
  Logistics as LogisticsView,
  Ecommerce as EcommerceView,
  About as AboutView,
  HelpCenter as HelpCenterView,
  HelpCenterArticle as HelpCenterArticleView,
  PortfolioPage as PortfolioPageView,
  PortfolioMasonry as PortfolioMasonryView,
  PortfolioGrid as PortfolioGridView,
  CompanyTerms as CompanyTermsView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  AboutSideCover as AboutSideCoverView,
  BlogSearch as BlogSearchView,
  BlogNewsroom as BlogNewsroomView,
  BlogArticle as BlogArticleView,
  BlogReachView as BlogReachViewView,
  PasswordResetCover as PasswordResetCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SigninCover as SigninCoverView,
  SignupSimple as SignupSimpleView,
  SignupCover as SignupCoverView,
  AccountBilling as AccountBillingView,
  AccountGeneral as AccountGeneralView,
  AccountNotifications as AccountNotificationsView,
  AccountSecurity as AccountSecurityView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}): React.JSX.Element => <IndexView {...params} />,
  },
  {
    path: '/home',
    renderer: (params = {}): React.JSX.Element => <HomeView {...params} />,
  },
  {
    path: '/customers',
    renderer: (params = {}): React.JSX.Element => <CustomersView {...params} />,
  },
  {
    path: '/hire-us',
    renderer: (params = {}): React.JSX.Element => <HireUsView {...params} />,
  },
  {
    path: '/faq',
    renderer: (params = {}): React.JSX.Element => <FaqView {...params} />,
  },
  {
    path: '/career-listing',
    renderer: (params = {}): React.JSX.Element => <CareerListingView {...params} />,
  },
  {
    path: '/career-listing-minimal',
    renderer: (params = {}): React.JSX.Element => (
      <CareerListingMinimalView {...params} />
    ),
  },
  {
    path: '/career-opening',
    renderer: (params = {}): React.JSX.Element => <CareerOpeningView {...params} />,
  },
  {
    path: '/contact-page',
    renderer: (params = {}): React.JSX.Element => <ContactPageView {...params} />,
  },
  {
    path: '/coworking',
    renderer: (params = {}): React.JSX.Element => <CoworkingView {...params} />,
  },
  {
    path: '/e-learning',
    renderer: (params = {}): React.JSX.Element => <ElearningView {...params} />,
  },
  {
    path: '/enterprise',
    renderer: (params = {}): React.JSX.Element => <EnterpriseView {...params} />,
  },
  {
    path: '/service',
    renderer: (params = {}): React.JSX.Element => <ServiceView {...params} />,
  },
  {
    path: '/web-basic',
    renderer: (params = {}): React.JSX.Element => <WebBasicView {...params} />,
  },
  {
    path: '/desktop-app',
    renderer: (params = {}): React.JSX.Element => <DesktopAppView {...params} />,
  },
  {
    path: '/expo',
    renderer: (params = {}): React.JSX.Element => <ExpoView {...params} />,
  },
  {
    path: '/agency',
    renderer: (params = {}): React.JSX.Element => <AgencyView {...params} />,
  },
  {
    path: '/startup',
    renderer: (params = {}): React.JSX.Element => <StartupView {...params} />,
  },
  {
    path: '/design-company',
    renderer: (params = {}): React.JSX.Element => <DesignCompanyView {...params} />,
  },
  {
    path: '/mobile-app',
    renderer: (params = {}): React.JSX.Element => <MobileAppView {...params} />,
  },
  {
    path: '/job-listing',
    renderer: (params = {}): React.JSX.Element => <JobListingView {...params} />,
  },
  {
    path: '/rental',
    renderer: (params = {}): React.JSX.Element => <RentalView {...params} />,
  },
  {
    path: '/cloud-hosting',
    renderer: (params = {}): React.JSX.Element => <CloudHostingView {...params} />,
  },
  {
    path: '/logistics',
    renderer: (params = {}): React.JSX.Element => <LogisticsView {...params} />,
  },
  {
    path: '/e-commerce',
    renderer: (params = {}): React.JSX.Element => <EcommerceView {...params} />,
  },
  {
    path: '/help-center',
    renderer: (params = {}): React.JSX.Element => <HelpCenterView {...params} />,
  },
  {
    path: '/help-center-article',
    renderer: (params = {}): React.JSX.Element => (
      <HelpCenterArticleView {...params} />
    ),
  },
  {
    path: '/portfolio-page',
    renderer: (params = {}): React.JSX.Element => <PortfolioPageView {...params} />,
  },
  {
    path: '/portfolio-masonry',
    renderer: (params = {}): React.JSX.Element => (
      <PortfolioMasonryView {...params} />
    ),
  },
  {
    path: '/portfolio-grid',
    renderer: (params = {}): React.JSX.Element => <PortfolioGridView {...params} />,
  },
  {
    path: '/company-terms',
    renderer: (params = {}): React.JSX.Element => <CompanyTermsView {...params} />,
  },
  {
    path: '/contact-sidebar-map',
    renderer: (params = {}): React.JSX.Element => (
      <ContactPageSidebarMapView {...params} />
    ),
  },
  {
    path: '/contact-page-cover',
    renderer: (params = {}): React.JSX.Element => (
      <ContactPageCoverView {...params} />
    ),
  },
  {
    path: '/about',
    renderer: (params = {}): React.JSX.Element => <AboutView {...params} />,
  },
  {
    path: '/about-side-cover',
    renderer: (params = {}): React.JSX.Element => <AboutSideCoverView {...params} />,
  },
  {
    path: '/blog-search',
    renderer: (params = {}): React.JSX.Element => <BlogSearchView {...params} />,
  },
  {
    path: '/blog-newsroom',
    renderer: (params = {}): React.JSX.Element => <BlogNewsroomView {...params} />,
  },
  {
    path: '/blog-article',
    renderer: (params = {}): React.JSX.Element => <BlogArticleView {...params} />,
  },
  {
    path: '/blog-reach-view',
    renderer: (params = {}): React.JSX.Element => <BlogReachViewView {...params} />,
  },
  {
    path: '/password-reset-cover',
    renderer: (params = {}): React.JSX.Element => (
      <PasswordResetCoverView {...params} />
    ),
  },
  {
    path: '/password-reset-simple',
    renderer: (params = {}): React.JSX.Element => (
      <PasswordResetSimpleView {...params} />
    ),
  },
  {
    path: '/signin-simple',
    renderer: (params = {}): React.JSX.Element => <SigninSimpleView {...params} />,
  },
  {
    path: '/signin-cover',
    renderer: (params = {}): React.JSX.Element => <SigninCoverView {...params} />,
  },
  {
    path: '/signup-simple',
    renderer: (params = {}): React.JSX.Element => <SignupSimpleView {...params} />,
  },
  {
    path: '/signup-cover',
    renderer: (params = {}): React.JSX.Element => <SignupCoverView {...params} />,
  },
  {
    path: '/account-billing',
    renderer: (params = {}): React.JSX.Element => <AccountBillingView {...params} />,
  },
  {
    path: '/account-general',
    renderer: (params = {}): React.JSX.Element => <AccountGeneralView {...params} />,
  },
  {
    path: '/account-notifications',
    renderer: (params = {}): React.JSX.Element => (
      <AccountNotificationsView {...params} />
    ),
  },
  {
    path: '/account-security',
    renderer: (params = {}): React.JSX.Element => <AccountSecurityView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}): React.JSX.Element => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}): React.JSX.Element => <NotFoundCoverView {...params} />,
  },
];

export default routes;
