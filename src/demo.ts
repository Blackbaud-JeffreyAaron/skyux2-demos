import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  SkyActionButtonDemoComponent,
  SkyAlertDemoComponent,
  SkyAutocompleteDemoComponent,
  SkyAvatarDemoComponent,
  SkyCardDemoComponent,
  SkyCheckboxDemoComponent,
  SkyColorpickerDemoComponent,
  SkyColorpickerReactiveDemoComponent,
  SkyColorpickerTemplateDrivenDemoComponent,
  SkyConfirmDemoComponent,
  SkyDatepickerDemoComponent,
  SkyFuzzyDatepickerDemoComponent,
  SkyDefinitionListDemoComponent,
  SkyDropdownDemoComponent,
  SkyEmailValidationDemoComponent,
  SkyErrorDemoComponent,
  SkyFileAttachmentDemoComponent,
  SkyFilterDemoComponent,
  SkyFilterInlineDemoComponent,
  SkyFluidGridDemoComponent,
  SkyFlyoutDemoComponent,
  SkyGridDemoComponent,
  SkyHelpInlineDemoComponent,
  SkyIconDemoComponent,
  SkyInfiniteScrollDemoComponent,
  SkyKeyInfoDemoComponent,
  SkyLabelDemoComponent,
  SkyLinkRecordsDemoComponent,
  SkyListDemoComponent,
  SkyListProviderDemoComponent,
  SkyListFiltersDemoComponent,
  SkyListFiltersInlineDemoComponent,
  SkyListPagingDemoComponent,
  SkyListToolbarDemoComponent,
  SkyListToolbarCustomDemoComponent,
  SkyListViewChecklistDemoComponent,
  SkyListViewGridDemoComponent,
  SkyLookupDemoComponent,
  SkyMediaQueryDemoComponent,
  SkyModalDemoComponent,
  SkyNavbarDemoComponent,
  SkyNumericDemoComponent,
  SkyPageSummaryDemoComponent,
  SkyPagingDemoComponent,
  SkyPopoverDemoComponent,
  SkyProgressIndicatorDemoComponent,
  SkyRadioDemoComponent,
  SkyRepeaterDemoComponent,
  SkySearchDemoComponent,
  SkySectionedFormDemoComponent,
  SkyDemoAddressFormComponent,
  SkyDemoInformationFormComponent,
  SkyDemoPhoneFormComponent,
  SkySelectFieldDemoComponent,
  SkySortDemoComponent,
  SkyTabsDemoComponent,
  SkyTextExpandDemoComponent,
  SkyTextExpandRepeaterDemoComponent,
  SkyTextHighlightDemoComponent,
  SkyTileDemoComponent,
  SkyTimepickerDemoComponent,
  SkyToastDemoComponent,
  SkyToastCustomDemoComponent,
  SkyTokensDemoComponent,
  SkyToolbarDemoComponent,
  SkyUrlValidationDemoComponent,
  SkyVerticalTabsDemoComponent,
  SkyWaitDemoComponent,
  SkyWizardDemoComponent,

  // Entry components
  SkyFilterDemoModalComponent,
  SkyListFiltersModalDemoComponent,
  SkyModalDemoCloseConfirmationComponent,
  SkyModalDemoFormComponent,
  SkyModalDemoTiledFormComponent,
  SkyProgressIndicatorDemoFormComponent,
  SkySectionedModalFormDemoComponent,
  SkyTileDemoTile1Component,
  SkyTileDemoTile2Component,
  SkyWizardDemoModalComponent,
  SkyFlyoutDemoInternalComponent,
  SkyFlyoutDemoInternalSimpleComponent
} from './demos';

import { SkyDemoService } from './demos/demo.service';

const components = [
  SkyActionButtonDemoComponent,
  SkyAlertDemoComponent,
  SkyAutocompleteDemoComponent,
  SkyAvatarDemoComponent,
  SkyCardDemoComponent,
  SkyCheckboxDemoComponent,
  SkyColorpickerDemoComponent,
  SkyColorpickerReactiveDemoComponent,
  SkyColorpickerTemplateDrivenDemoComponent,
  SkyConfirmDemoComponent,
  SkyDatepickerDemoComponent,
  SkyFuzzyDatepickerDemoComponent,
  SkyDefinitionListDemoComponent,
  SkyDropdownDemoComponent,
  SkyEmailValidationDemoComponent,
  SkyErrorDemoComponent,
  SkyFileAttachmentDemoComponent,
  SkyFilterDemoComponent,
  SkyFilterInlineDemoComponent,
  SkyFluidGridDemoComponent,
  SkyFlyoutDemoComponent,
  SkyFlyoutDemoInternalComponent,
  SkyFlyoutDemoInternalSimpleComponent,
  SkyGridDemoComponent,
  SkyIconDemoComponent,
  SkyHelpInlineDemoComponent,
  SkyInfiniteScrollDemoComponent,
  SkyKeyInfoDemoComponent,
  SkyLabelDemoComponent,
  SkyLinkRecordsDemoComponent,
  SkyListDemoComponent,
  SkyListProviderDemoComponent,
  SkyListFiltersDemoComponent,
  SkyListFiltersInlineDemoComponent,
  SkyListPagingDemoComponent,
  SkyListToolbarDemoComponent,
  SkyListToolbarCustomDemoComponent,
  SkyListViewChecklistDemoComponent,
  SkyListViewGridDemoComponent,
  SkyLookupDemoComponent,
  SkyMediaQueryDemoComponent,
  SkyModalDemoComponent,
  SkyNavbarDemoComponent,
  SkyNumericDemoComponent,
  SkyPageSummaryDemoComponent,
  SkyPagingDemoComponent,
  SkyPopoverDemoComponent,
  SkyProgressIndicatorDemoComponent,
  SkyRadioDemoComponent,
  SkyRepeaterDemoComponent,
  SkySearchDemoComponent,
  SkySectionedFormDemoComponent,
  SkyDemoAddressFormComponent,
  SkyDemoInformationFormComponent,
  SkyDemoPhoneFormComponent,
  SkySelectFieldDemoComponent,
  SkySortDemoComponent,
  SkyTabsDemoComponent,
  SkyTextExpandDemoComponent,
  SkyTextExpandRepeaterDemoComponent,
  SkyTextHighlightDemoComponent,
  SkyTileDemoComponent,
  SkyTimepickerDemoComponent,
  SkyToastDemoComponent,
  SkyToastCustomDemoComponent,
  SkyTokensDemoComponent,
  SkyToolbarDemoComponent,
  SkyUrlValidationDemoComponent,
  SkyVerticalTabsDemoComponent,
  SkyWaitDemoComponent,
  SkyWizardDemoComponent,
  SkyFilterDemoModalComponent,
  SkyListFiltersModalDemoComponent,
  SkyModalDemoCloseConfirmationComponent,
  SkyModalDemoFormComponent,
  SkyModalDemoTiledFormComponent,
  SkyProgressIndicatorDemoFormComponent,
  SkySectionedModalFormDemoComponent,
  SkyTileDemoTile1Component,
  SkyTileDemoTile2Component,
  SkyWizardDemoModalComponent
];

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyColorpickerModule
} from '@skyux/colorpicker';

import {
  SkyMediaQueryModule,
  SkyNumericModule
} from '@skyux/core';

import {
  SkyDatepickerModule,
  SkyTimepickerModule
} from '@skyux/datetime';

import {
  SkyErrorModule
} from '@skyux/errors';

import {
  SkyFlyoutModule
} from '@skyux/flyout';

import {
  SkyCheckboxModule,
  SkyFileAttachmentsModule,
  SkyRadioModule
} from '@skyux/forms';

import {
  SkyGridModule
} from '@skyux/grids';

import {
  SkyAlertModule,
  SkyHelpInlineModule,
  SkyIconModule,
  SkyTextHighlightModule,
  SkyKeyInfoModule,
  SkyLabelModule,
  SkyTokensModule,
  SkyWaitModule
} from '@skyux/indicators';

import {
  SkyActionButtonModule,
  SkyCardModule,
  SkyDefinitionListModule,
  SkyFluidGridModule,
  SkyPageSummaryModule,
  SkyTextExpandModule,
  SkyTextExpandRepeaterModule,
  SkyToolbarModule
} from '@skyux/layout';

import {
  SkyLinkRecordsModule
} from '@skyux/link-records';

import {
  SkyListModule,
  SkyListFiltersModule,
  SkyListPagingModule,
  SkyListToolbarModule,
  SkyListSecondaryActionsModule
} from '@skyux/list-builder';

import {
  SkyListViewChecklistModule
} from '@skyux/list-builder-view-checklist';

import {
  SkyListViewGridModule
} from '@skyux/list-builder-view-grids';

import {
  SkyFilterModule,
  SkyInfiniteScrollModule,
  SkyPagingModule,
  SkyRepeaterModule,
  SkySortModule
} from '@skyux/lists';

import {
  SkyAutocompleteModule,
  SkyLookupModule,
  SkySearchModule
} from '@skyux/lookup';

import {
  SkyConfirmModule,
  SkyModalModule
} from '@skyux/modals';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkyDropdownModule,
  SkyPopoverModule
} from '@skyux/popovers';

import {
  SkyProgressIndicatorModule
} from '@skyux/progress-indicator';

import {
  SkySelectFieldModule
} from '@skyux/select-field';

import {
  SkySectionedFormModule,
  SkyTabsModule,
  SkyVerticalTabsetModule
} from '@skyux/tabs';

import {
  SkyTileModule,
  SkyTileContentModule,
  SkyTileDashboardModule
} from '@skyux/tiles';

import {
  SkyToastModule
} from '@skyux/toast';

import {
  SkyEmailValidationModule,
  SkyUrlValidationModule
} from '@skyux/validation';

@NgModule({
  declarations: components,
  providers: [SkyDemoService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SkyActionButtonModule,
    SkyAlertModule,
    SkyAutocompleteModule,
    SkyAvatarModule,
    SkyCardModule,
    SkyCheckboxModule,
    SkyColorpickerModule,
    SkyConfirmModule,
    SkyDatepickerModule,
    SkyDefinitionListModule,
    SkyDropdownModule,
    SkyEmailValidationModule,
    SkyErrorModule,
    SkyFileAttachmentsModule,
    SkyFilterModule,
    SkyFluidGridModule,
    SkyFlyoutModule,
    SkyGridModule,
    SkyHelpInlineModule,
    SkyTextHighlightModule,
    SkyIconModule,
    SkyInfiniteScrollModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyLinkRecordsModule,
    SkyListModule,
    SkyListFiltersModule,
    SkyListPagingModule,
    SkyListSecondaryActionsModule,
    SkyListToolbarModule,
    SkyListViewChecklistModule,
    SkyListViewGridModule,
    SkyLookupModule,
    SkyMediaQueryModule,
    SkyModalModule,
    SkyNavbarModule,
    SkyNumericModule,
    SkyPageSummaryModule,
    SkyPagingModule,
    SkyPopoverModule,
    SkyProgressIndicatorModule,
    SkyRadioModule,
    SkyRepeaterModule,
    SkySearchModule,
    SkySectionedFormModule,
    SkySelectFieldModule,
    SkySortModule,
    SkyTabsModule,
    SkyTextExpandModule,
    SkyTextExpandRepeaterModule,
    SkyTextHighlightModule,
    SkyTileModule,
    SkyTileContentModule,
    SkyTileDashboardModule,
    SkyTimepickerModule,
    SkyToastModule,
    SkyTokensModule,
    SkyToolbarModule,
    SkyUrlValidationModule,
    SkyVerticalTabsetModule,
    SkyWaitModule
  ],
  exports: components,
  entryComponents: components
})
export class SkyDemoModule { }

export * from './demos';
export * from './demos/demo.service';
