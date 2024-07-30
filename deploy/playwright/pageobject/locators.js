class PageLocators {
  constructor(page) {
    this.page = page;
    this.tryItNowLink = 'a[href="https://saltcorn.com/tenant/create"]';
    this.subdomainInput = 'input[name="subdomain"]';
    this.submitButton = 'button[type="submit"]';
    this.successMessage = '#page-inner-content > section.page-section.pt-2 > div > div > div:nth-child(1)';
    this.newApplicationLink = '#page-inner-content > section.page-section.pt-2 > div > div > div.my-3 > a';
    this.emailInput = 'input[type="email"]';
    this.passwordInput = 'input[type="password"]';
    this.textSource = '#saltcorn-builder > div.row > div.col-sm-auto.left-builder-col.builder-left-shrunk > div.componets-and-library-accordion.toolbox-card > div.card.mt-1 > div:nth-child(1) > div:nth-child(1)';
    this.textlocator='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > div.border > div';
    this.tableNameTextlocator='#page-inner-content > div:nth-child(2) > div.card.mt-4.shadow > div > form > div:nth-child(2) > div.col-sm-10 > input';
    this.createButtonLocator= '#page-inner-content > div:nth-child(2) > div.card.mt-4.shadow > div > form > div:nth-child(3) > div > button';
    this.FieldsLocator='#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > div > table > tbody';
    this.addFieldButtonLocator= '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > a';
    this.labelTextboxlocator = '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > form > div:nth-child(2) > div.col-sm-10 > input';
    this.typedropdownLocator = '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > form > div:nth-child(3) > div.col-sm-10 > String';
    this.descriptionSelector = '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > form > div:nth-child(4) > div.col-sm-10 > input';
    this.RequiredcheckboxLocator = '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > form > div:nth-child(6) > div.col-10 > form-check-input';
    this.Nextbuttonlocator= '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > form > div:nth-child(14) > div > button';
    this.minlengthlocator= '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > form > div:nth-child(3) > div:nth-child(2) > input';
    this.maxlengthlocator= '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > form > div:nth-child(3) > div:nth-child(4) > input';
    this.regularexpressionlocator= '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > form > div:nth-child(4) > div:nth-child(2) > input';
    this.errormessagelocator= '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > form > div:nth-child(4) > div:nth-child(4) > input';
    this.EditlinkLocator = '#page-inner-content > div:nth-child(2) > div:nth-child(3) > div > div > div:nth-child(2) > a';
    this.addrowlocator = '#page-inner-content > div:nth-child(2) > nav > ol > li.ms-auto > div > button';
    this.tablocater = '#jsGrid > div.tabulator-tableholder > div';
    this.target = '#builder-main-canvas > div > div > div';
    this.lineBreakSource = '#saltcorn-builder > div.row > div.col-sm-auto.left-builder-col.builder-left-shrunk > div.componets-and-library-accordion.toolbox-card > div.card.mt-1 > div:nth-child(2) > div:nth-child(1) > div';
    this.htmlCodeSource = '#saltcorn-builder > div.row > div.col-sm-auto.left-builder-col.builder-left-shrunk > div.componets-and-library-accordion.toolbox-card > div.card.mt-1 > div:nth-child(2) > div:nth-child(2)';
    this.cardSource = '#saltcorn-builder > div.row > div.col-sm-auto.left-builder-col.builder-left-shrunk > div.componets-and-library-accordion.toolbox-card > div.card.mt-1 > div:nth-child(3) > div:nth-child(1)';
    this.linkSource = '#saltcorn-builder > div.row > div.col-sm-auto.left-builder-col.builder-left-shrunk > div.componets-and-library-accordion.toolbox-card > div.card.mt-1 > div:nth-child(4) > div:nth-child(1)';
    this.imageSource = '#saltcorn-builder > div.row > div.col-sm-auto.left-builder-col.builder-left-shrunk > div.componets-and-library-accordion.toolbox-card > div.card.mt-1 > div:nth-child(3) > div:nth-child(2)';
    this.saveButton = '#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > button';
    this.newPageButton = '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > div > a';
    this.newPage_sidebar='#accordionSidebar > li:nth-child(6) > a > span';
    this.newPageNameInput = '#inputname';
    this.settingsTab = '#accordionSidebar > li:nth-child(7) > a > span';
    this.settingdropdown='#collapseSettings > div';
    this.aboutApplicationLink = '#collapseSettings > div > a:nth-child(1)';
    this.Modulesettngsidebar = '#collapseSettings > div > a:nth-child(2)';
    this.UsersAndSecurity = '#collapseSettings > div > a:nth-child(3)';
    this.SiteStructure = '#collapseSettings > div > a:nth-child(4)';
    this.File = '#collapseSettings > div > a:nth-child(5)';
    this.Events = '#collapseSettings > div > a:nth-child(6)';
    this.systemSettingsLink = '#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > div > ul > li:nth-child(4) > a';
    this.clearAllButton = 'a[href="/admin/clear-all"]';
    this.toasterSelector = '#toasts-area > div > div.toast-body.py-2.fs-6.fw-bold > strong';
    this.htmltextlocator ='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > table > tbody > tr > td > textarea';
    this.cardtextlocator = '#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > table > tbody > tr:nth-child(1) > td > input';
    this.linklocator = '#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > table.w-100 > tbody > tr:nth-child(1) > td:nth-child(2) > input';
    this.linkurllocator = '#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > table.w-100 > tbody > tr:nth-child(3) > td:nth-child(2) > input';
    this.expectedtoastermsg = 'Deleted all tables, views, pages, page_groups, files, triggers, eventlog, library, config, plugins';
    this.deletebutton='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > button.btn.btn-sm.btn-danger';
    this.clonebutton='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > button.btn.btn-sm.btn-secondary.ms-2'; 
    this.CardUrl='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > table > tbody > tr:nth-child(2) > td > input';
    this.SearchLocator='#saltcorn-builder > div.row > div.col-sm-auto.left-builder-col.builder-left-shrunk > div.componets-and-library-accordion.toolbox-card > div.card.mt-1 > div:nth-child(5) > div:nth-child(1)';  
    this.Autofocuscheckbox='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > div:nth-child(3) > input';
    this.statebadgecheckbox='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > div:nth-child(2) > input';
    this.hasdropdowncheckbox='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > div:nth-child(1) > input';
    this.containsdraglocator='#saltcorn-builder > div.row > div.col-sm-auto.left-builder-col.builder-left-shrunk > div.componets-and-library-accordion.toolbox-card > div.card.mt-1 > div:nth-child(6) > div:nth-child(1)';
    this.containerdisplaysetting='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div:nth-child(6)';
    this.containercontentsetting='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div:nth-child(7)';
    this.containerflexsetting='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div:nth-child(8)';
    this.containercontentlink='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div:nth-child(10)';
    this.containercustomclass='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div:nth-child(11)';
    this.ActionLocator='#saltcorn-builder > div.row > div.col-sm-auto.left-builder-col.builder-left-shrunk > div.componets-and-library-accordion.toolbox-card > div.card.mt-1 > div:nth-child(5) > div:nth-child(2)';
    this.ActionDropdown='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > select';
    this.ActionLabel='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > table > tbody > tr:nth-child(2) > td > input';
    this.ActionStyledropdown='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > select';
    this.Actionsizedropdown='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > select';
    this.ActionHoverTitle='#saltcorn-builder > div.row > div.col-sm-auto.builder-sidebar > div > div.settings-panel.card.mt-1 > div.card-body.p-2 > div > table > tbody > tr:nth-child(6) > td:nth-child(2) > input';
    this.click_table='a[href="/table"]';
    this.createtablebutton='a[href="/table/new"]';
    this.SaltCornButton='#accordionSidebar > a > div';
    this.createviewbutton='#accordionSidebar > li.nav-item.active > a';
    this.sidebarviewbutton='#accordionSidebar > li:nth-child(5) > a';
    this.createnewview='#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > a';
    this.Homecreateview='#page-inner-content > div:nth-child(2) > div.row.row-cols-1.row-cols-md-3.g-4.g-4.mb-3 > div:nth-child(2) > div > div.card-footer > div > a';
    this.createtablefromCSV='#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > div:nth-child(2) > a.btn.btn-secondary.me-3.mt-1';
    this.homeCSVuplaod='#page-inner-content > div:nth-child(2) > div.row.row-cols-1.row-cols-md-3.g-4.g-4.mb-3 > div:nth-child(1) > div > div.card-footer > div > a.btn.btn-secondary.ms-2';
    this.Defaultusertable='#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > div.table-responsive > table > tbody > tr > td:nth-child(1) > a';
    this.Yourtabletab='#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > span > h5 > ul > li:nth-child(1) > a';
    this.relationshipdiagram='#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > span > h5 > ul > li:nth-child(2) > a';
    this.discoverbutton='#page-inner-content > div:nth-child(2) > div.card.shadow.mt-0 > div > div:nth-child(2) > a:nth-child(3)';
    this.HomeTableText='';
    this.Home_new_page_button='#page-inner-content > div:nth-child(2) > div.row.row-cols-1.row-cols-md-3.g-4.g-4.mb-3 > div:nth-child(3) > div > div.card-footer > div > a';
  } 
}


module.exports = PageLocators;
