<!--
  This page is used to show preview of colors.
-->

<script>
  import { Alert, Button, Breadcrumb, BreadcrumbItem, Spinner, Card, Toggle, Label, Input, Checkbox, Drawer, CloseButton, Sidebar, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper, Dropdown, DropdownItem, Popover, Radio, Range } from 'flowbite-svelte';
  import { InfoCircleSolid, HomeOutline, ChevronDoubleRightOutline, ArrowRightOutline, CheckCircleSolid, ChartPieSolid, ShoppingCartSolid, GridSolid, MailBoxSolid, UsersSolid, BagSolid, ArrowRightToBracketSolid, FileEditSolid, ChevronDownSolid, ChevronRightSolid, DatabaseSolid, ChevronRightOutline } from 'flowbite-svelte-icons';
  import { colors } from "$lib/scripts/color-stores.js";
  import { sineIn } from 'svelte/easing';
  import { page } from '$app/stores';

  let mainColor = "#000000";
  let accentColor = "#000000";
  let accent2Color = "#000000";
  let accent3Color = "#000000";

  colors.subscribe(() => {
    mainColor = $colors[0];
    if (!$colors[1]) {
      accentColor = mainColor;
      accent2Color = mainColor;
      accent3Color = mainColor;
    }
    else if (!$colors[2]) {
      accentColor = $colors[1];
      accent2Color = mainColor;
      accent3Color = $colors[1];
    }
    else if (!$colors[3]) {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      accent3Color = $colors[1];
    }
    else {
      accentColor = $colors[1];
      accent2Color = $colors[2];
      accent3Color = $colors[3];
    }
  });

  let hidden2 = true;
  let spanClass = 'flex-1 ms-3 whitespace-nowrap';
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };

  let hidden8 = true;
  let transitionParamsBottom = {
    y: 320,
    duration: 200,
    easing: sineIn
  };
  $: activeUrl = $page.url.pathname;

</script>

<!-- main -->
<div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:gap-6">

  <!-- left -->
  <div>

    <!-- path -->
    <Breadcrumb aria-label="Solid background breadc rumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900 mb-4" style={`color: ${mainColor};`}>
      <BreadcrumbItem href="/" home>
        <svelte:fragment slot="icon">
          <HomeOutline class="w-4 h-4 me-2" />
        </svelte:fragment>Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/">
        <svelte:fragment slot="icon">
          <ChevronDoubleRightOutline class="w-3 h-3 mx-2" />
        </svelte:fragment>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem>
        <svelte:fragment slot="icon">
          <ChevronDoubleRightOutline class="w-3 h-3 mx-2" />
        </svelte:fragment>
        Flowbite Svelte
      </BreadcrumbItem>
    </Breadcrumb>

    <!-- alert -->
    <Alert class="mb-4" style={`color: ${mainColor};`}>
      <InfoCircleSolid slot="icon" class="w-4 h-4"/>
      A simple default alert with an
      <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900" style={`color: ${mainColor};`}>example link</a>
    </Alert>

    <!-- panele -->
    <div class="flex flex-row">

      <!-- paid plan -->
      <div class="mr-0 lg:mr-4 mb-4 lg:mb-0 lg:h-auto h-[36.5rem] lg:w-auto w-1/2">
        <Card padding="xl" class="h-full">
          <h5 class="mb-4 text-xl font-medium" style={`color: ${mainColor};`}>Standard plan</h5>
          <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-3xl font-semibold" style={`color: ${mainColor};`}>$</span>
            <span class="text-5xl font-extrabold tracking-tight" style={`color: ${mainColor};`}>49</span>
            <span class="ms-1 text-xl font-normal" style={`color: ${accent2Color};`}>/month</span>
          </div>
          <!-- List -->
          <ul class="my-2 space-y-4">
            <li class="flex space-x-2 rtl:space-x-reverse">
              <CheckCircleSolid class="w-4 h-4" style={`color: ${accentColor};`}/>
              <span class="text-base font-normal leading-tight" style={`color: ${accent2Color};`}> 2 team members </span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse">
              <CheckCircleSolid class="w-4 h-4" style={`color: ${accentColor};`}/>
              <span class="text-base font-normal leading-tight" style={`color: ${accent2Color};`}> 20GB Cloud storage </span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse">
              <CheckCircleSolid class="w-4 h-4" style={`color: ${accentColor};`}/>
              <span class="text-base font-normal leading-tight" style={`color: ${accent2Color};`}> Integration help </span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
              <CheckCircleSolid class="w-4 h-4" style={`color: ${accent3Color};`}/>
              <span class="text-base font-normal leading-tight" style={`color: ${accent3Color};`}>Sketch Files</span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
              <CheckCircleSolid class="w-4 h-4" style={`color: ${accent3Color};`}/>
              <span class="text-base font-normal leading-tight" style={`color: ${accent3Color};`}>API Access</span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
              <CheckCircleSolid class="w-4 h-4" style={`color: ${accent3Color};`}/>
              <span class="text-base font-normal leading-tight" style={`color: ${accent3Color};`}>Complete documentation</span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
              <CheckCircleSolid class="w-4 h-4" style={`color: ${accent3Color};`}/>
              <span class="text-base font-normal leading-tight" style={`color: ${accent3Color};`}>24×7 phone & email support</span>
            </li>
          </ul>
          <Button class="w-full" style={`background-color: ${mainColor};`}>Choose plan</Button>
        </Card>
      </div>

      <!-- sign in card -->
      <div>
        <Card class="lg:w-auto lg:h-auto h-[36.5rem]">
          <form class="flex flex-col space-y-6" action="/">
            <h3 class="text-xl font-medium" style={`color: ${mainColor};`}>Sign in to our platform</h3>
            <Label class="space-y-2">
              <span style={`color: ${accent2Color};`}>Email</span>
              <Input type="email" name="email" placeholder="name@company.com" required />
            </Label>
            <Label class="space-y-2">
              <span style={`color: ${accent2Color};`}>Your password</span>
              <Input type="password" name="password" placeholder="•••••" required />
            </Label>
            <div class="flex items-start">
              <Checkbox><span style={`color: ${accent2Color};`}>Remember me</span></Checkbox>
            </div>
            <a href="" class="ms-auto text-sm lg:text-center ml-0" style={`color: ${accent3Color};`}> Lost password? </a>
            <Button type="submit" class="w-full" style={`background-color: ${mainColor};`}>Login to your account</Button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300" style={`color: ${accentColor};`}>
              Not registered? <a href="" class="hover:underline" style={`color: ${accent3Color};`}> Create account </a>
            </div>
          </form>
        </Card>
      </div>

    </div>
  </div>

  <!-- right -->
  <div>

    <!-- navigations -->
    <div class="flex flex-row">
      <Button on:click={() => (hidden2 = false)} class="text-center mr-2 flex-1" style={`background-color: ${mainColor};`}>Show navigation</Button>

      <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden2} id="sidebar2">
        <div class="flex items-center">
          <h5 id="drawer-navigation-label-3" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
          <CloseButton on:click={() => (hidden2 = true)} class="mb-4 dark:text-white" />
        </div>
        <Sidebar>
          <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
            <SidebarGroup>
              <SidebarItem label="Dashboard">
                <svelte:fragment slot="icon">
                  <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
              </SidebarItem>
              <SidebarDropdownWrapper label="E-commerce">
                <svelte:fragment slot="icon">
                  <ShoppingCartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <SidebarDropdownItem label="Products" />
                <SidebarDropdownItem label="Billing" />
                <SidebarDropdownItem label="Invoice" />
              </SidebarDropdownWrapper>
              <SidebarItem label="Kanban" {spanClass}>
                <svelte:fragment slot="icon">
                  <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <svelte:fragment slot="subtext">
                  <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
                </svelte:fragment>
              </SidebarItem>
              <SidebarItem label="Inbox" {spanClass}>
                <svelte:fragment slot="icon">
                  <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
                <svelte:fragment slot="subtext">
                  <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
                </svelte:fragment>
              </SidebarItem>
              <SidebarItem label="Users">
                <svelte:fragment slot="icon">
                  <UsersSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
              </SidebarItem>
              <SidebarItem label="Products">
                <svelte:fragment slot="icon">
                  <BagSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
              </SidebarItem>
              <SidebarItem label="Sign In">
                <svelte:fragment slot="icon">
                  <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
              </SidebarItem>
              <SidebarItem label="Sign Up">
                <svelte:fragment slot="icon">
                  <FileEditSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment>
              </SidebarItem>
            </SidebarGroup>
          </SidebarWrapper>
        </Sidebar>
      </Drawer>

      <Button on:click={() => (hidden8 = false)} class="text-center flex-1" style={`background-color: ${accentColor};`}>Show drawer</Button>

      <Drawer placement="bottom" width="w-full" transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hidden8} id="sidebar8">
        <div class="flex items-center">
          <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            <InfoCircleSolid class="w-4 h-4 me-2.5" />Info
          </h5>
          <CloseButton on:click={() => (hidden8 = true)} class="mb-4 dark:text-white" />
        </div>
        <p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
          Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
          for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
        </p>
        <Button color="light" href="/">Learn more</Button>
        <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-3.5 h-3.5 ms-2" /></Button>
      </Drawer>
    </div>

    <!-- dropdowns -->
    <div class="mt-4 flex">

      <Button class="w-36 flex-1 mr-2" style={`background-color: ${accent3Color};`}>Dropdown button<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
      <Dropdown>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem class="flex items-center justify-between">
          Dropdown<ChevronRightSolid class="w-3 h-3 ms-2 text-primary-700 dark:text-white" />
        </DropdownItem>
        <Dropdown placement="right-start">
          <DropdownItem>Overview</DropdownItem>
          <DropdownItem>My downloads</DropdownItem>
          <DropdownItem>Billing</DropdownItem>
        </Dropdown>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem slot="footer">Sign out</DropdownItem>
      </Dropdown>

      <Button class="w-36 flex-1" style={`background-color: ${accent2Color};`}>Dropdown checkbox<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
      <Dropdown class="w-48 p-3 space-y-1 text-sm">
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Default checkbox</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox checked>Checked state</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Default checkbox</Checkbox>
        </li>
      </Dropdown>

    </div>

    <!-- buttons -->
    <div class="mt-4 flex flex-row">
      <Button style={`background-color: ${mainColor};`} class="flex-1 mr-2">Button</Button>
      <Button style={`background-color: ${accentColor};`} class="flex-1">Button</Button>
    </div>

    <div class="mt-4 flex flex-row">
      <Button style={`background: linear-gradient(45deg, ${mainColor}, ${accent3Color});`} class="flex-1 mr-2">Button</Button>
      <Button style={`background: linear-gradient(45deg, ${accent2Color}, ${accentColor});`} class="flex-1">Button</Button>
    </div>

    <!-- loadings -->
    <div class="flex flex-row mt-4">
      <Button class="flex-1 mr-2" style={`background-color: ${mainColor};`}>
        <Spinner class="me-3" size="4" color="white" />Loading ...
      </Button>
      <Button color="alternative" class="flex-1" style={`background-color: ${accentColor};`}>
        <Spinner class="me-3" size="4" />Loading ...
      </Button>
    </div>

    <!-- popover and storage -->
    <div class="flex flex-row mt-4">
      <Button id="hover" class="mr-2 flex-1 h-10" style={`background-color: ${accent3Color};`}>Hover popover</Button>
      <Popover class="w-64 text-sm font-light" title="Popover title" triggeredBy="#hover" trigger="hover">And here's some amazing content. It's very engaging. Right?</Popover>

      <Button id="progress" class="mb-4 w-64 flex-1" style={`background-color: ${accent2Color};`}>
        <DatabaseSolid class="me-2 w-4 h-4 text-white dark:text-white" /> Storage status
      </Button>
      <Popover triggeredBy="#progress" class="text-sm w-64 font-light">
        <div class="space-y-2">
          <h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3>
          <p class="text-gray-500 dark:text-gray-400">
            This server has <span class="font-semibold text-gray-900 dark:text-white">30</span>
            of
            <span class="font-semibold text-gray-900 dark:text-white">150 GB</span>
            of block storage remaining.
          </p>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div class="bg-red-600 h-2.5 rounded-full" style="width: 85%" />
          </div>
          <a href="/" class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">
            Upgrade now <ChevronRightOutline class="w-2 h-2 ms-1.5 text-primary-600 dark:text-primary-500" />
          </a>
        </div>
      </Popover>
    </div>

    <!-- inputs -->
    <div class="flex flex-row mb-4">
      <Input style={`background-color: ${mainColor}; color: ${accentColor};`} placeholder="Default input" class="mr-2"/>
      <Input style={`background-color: ${accentColor}; color: ${mainColor};`} placeholder="Disabled input" disabled/>
    </div>

    <!-- range -->
    <div>
      <Range style={`background-color: ${accentColor};`}></Range>
    </div>

    <!-- checkboxes and toggles-->
    <div class="flex flex-row mt-4">

      <!-- checkboxes -->
      <div class="flex-1 mr-2">
        <Checkbox style={`background-color: ${mainColor};`} class="mb-4">Default checkbox</Checkbox>
        <Checkbox checked style={`background-color: ${accentColor};`}>Checked state</Checkbox>
      </div>

      <div class="flex-1">
        <Checkbox style={`background-color: ${accent2Color};`} class="mb-4">Default checkbox</Checkbox>
        <Checkbox checked style={`background-color: ${accent3Color};`}>Checked state</Checkbox>
      </div>

    </div>

  </div>

</div>
