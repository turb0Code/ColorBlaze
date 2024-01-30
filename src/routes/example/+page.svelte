<script>

  import { Alert, Button, Indicator, Badge, BottomNav, BottomNavItem, Skeleton, ImagePlaceholder, Tooltip, Breadcrumb, BreadcrumbItem, ButtonGroup, GradientButton, Spinner, Card, Toggle, Label, Input, Checkbox, Rating,DeviceMockup,  Drawer, CloseButton, Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper, A,  Dropdown, DropdownItem, Popover, SpeedDial, SpeedDialButton, BottomNavHeader, BottomNavHeaderItem, Gallery, Listgroup, ListgroupItem, Progressbar, Toast} from 'flowbite-svelte';

  import { InfoCircleSolid, EnvelopeSolid, HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid, PlusSolid, HomeOutline, ChevronDoubleRightOutline, ThumbsUpSolid, ArrowRightOutline,  GiftBoxSolid, ArrowUpRightFromSquareOutline, CheckCircleSolid, ChartPieSolid, ShoppingCartSolid, GridSolid, MailBoxSolid, UsersSolid, BagSolid, ArrowRightToBracketSolid, FileEditSolid, ChevronDownSolid, ChevronRightSolid, DatabaseSolid, ChevronRightOutline, ShareNodesSolid, PrintSolid, DownloadSolid, FileCopySolid, BookmarkSolid, SearchOutline, AdjustmentsHorizontalSolid, MessagesSolid,  PapperPlaneOutline} from 'flowbite-svelte-icons';

  import { sineIn } from 'svelte/easing';
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
  import { page } from '$app/stores';
  $: activeUrl = $page.url.pathname;


  let icons = [
    { name: 'Profile', icon: UserCircleSolid },
    { name: 'Settings', icon: AdjustmentsHorizontalSolid },
    { name: 'Messages', icon: MessagesSolid },
    { name: 'Download', icon: DownloadSolid }
  ];

</script>

<!-- top -->
<div class="flex-row flex absolute left-20 w-full">

  <div class="w-2/5 mr-10">
    <!-- pasek z strzałkami -->
    <Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
      <BreadcrumbItem href="/" home>
        <svelte:fragment slot="icon">
          <HomeOutline class="w-4 h-4 me-2" />
        </svelte:fragment>Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/">
        <svelte:fragment slot="icon">
          <ChevronDoubleRightOutline class="w-3 h-3 mx-2 dark:text-white" />
        </svelte:fragment>
        Projects
      </BreadcrumbItem>
      <BreadcrumbItem>
        <svelte:fragment slot="icon">
          <ChevronDoubleRightOutline class="w-3 h-3 mx-2 dark:text-white" />
        </svelte:fragment>
        Flowbite Svelte
      </BreadcrumbItem>
    </Breadcrumb>
  </div>

  <div class="w-2/5">
    <!-- alert -->
    <Alert dismissable class="">
      <InfoCircleSolid slot="icon" class="w-4 h-4" />
      A simple default alert with an
      <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
    </Alert>
  </div>

</div>


<!-- panele -->
  <div class="flex flex-row absolute left-20 top-40">

    <!-- lewa -->
    <div class="mr-14">
      <Card padding="xl">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-3xl font-semibold">$</span>
          <span class="text-5xl font-extrabold tracking-tight">49</span>
          <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <!-- List -->
        <ul class="my-2 space-y-4">
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid class="w-4 h-4 text-primary-600 dark:text-primary-500" />
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> 2 team members </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid class="w-4 h-4 text-primary-600 dark:text-primary-500" />
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> 20GB Cloud storage </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse">
            <CheckCircleSolid class="w-4 h-4 text-primary-600 dark:text-primary-500" />
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> Integration help </span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
            <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
            <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span class="text-base font-normal leading-tight text-gray-500">API Access</span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
            <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
          </li>
          <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
            <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
          </li>
        </ul>
        <Button class="w-full">Choose plan</Button>
      </Card>
    </div>

    <!-- srodek -->
    <div>
      <Card class="h-full">
        <form class="flex flex-col space-y-6" action="/">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
          <Label class="space-y-2">
            <span>Email</span>
            <Input type="email" name="email" placeholder="name@company.com" required />
          </Label>
          <Label class="space-y-2">
            <span>Your password</span>
            <Input type="password" name="password" placeholder="•••••" required />
          </Label>
          <div class="flex items-start">
            <Checkbox>Remember me</Checkbox>
            <a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Lost password? </a>
          </div>
          <Button type="submit" class="w-full">Login to your account</Button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500"> Create account </a>
          </div>
        </form>
      </Card>
    </div>


    <!-- prawa -->
    <div>

      <!-- dropdowny -->
      <div class="ml-12 mt-4">
        <Button class="w-36">Dropdown button<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
        <Dropdown {activeUrl}>
          <DropdownItem href="/">Home</DropdownItem>
          <DropdownItem href="/docs/components/dropdown">Dropdown</DropdownItem>
          <DropdownItem href="/docs/components/accordion">Accordion</DropdownItem>
          <DropdownItem href="/docs/components/alert">Alert</DropdownItem>
        </Dropdown>

        <Button class="w-36">Dropdown button<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
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

        <Button class="w-36">Dropdown checkbox<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
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

        <Button class="w-36">Dropdown toggle<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" /></Button>
        <Dropdown class="w-36 p-3 space-y-1">
          <li>
            <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
          </li>
          <li>
            <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600" checked>Checked state</Toggle>
          </li>
          <li>
            <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
          </li>
        </Dropdown>
      </div>

      <!-- pullovery i galeria -->
      <div class="flex flex-row">

        <!-- zdjecia -->
        <div class="mt-8 ml-16">

          <div class="flex flex-row">
            <div class="pr-2">
              <img src="src/lib/images/phone1.jpg" alt="shoas" class="h-32 w-32 rounded-lg mb-2" />
              <div class="h-32 w-32 rounded-lg flex items-center justify-center text-3xl font-extrabold bg-red-300">Sale</div>
            </div>
  
            <div>
              <div class="h-32 w-32 rounded-lg flex items-center justify-center text-3xl font-extrabold bg-blue-300 mb-2">Sale</div>
              <img alt="plants" src="src/lib/images/image2.jpg" class="h-32 w-32 rounded-lg" />
            </div>
          </div>
  
  
        </div>

        <!-- pullovery -->
        <div class="mt-12">

          <!-- click i hover -->
          <div class="ml-8">
          <Button id="hover" class="mr-2">Hover popover</Button>
        <Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#hover" trigger="hover">And here's some amazing content. It's very engaging. Right?</Popover>
        
        <Button id="click">Click popover</Button>
        <Popover class="w-64 text-sm font-light " title="Popover title" triggeredBy="#click" trigger="click">And here's some amazing content. It's very engaging. Right?</Popover>
          </div>

          <!-- storage i checbox -->
          <div class="flex flex-col ml-10 mt-4 mb-2">

        <Button id="progress" class="mr-2 mb-4 w-64">
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

          <div class="ml-16">
            <Checkbox>Default checkbox</Checkbox>
            <Checkbox checked>Checked state</Checkbox>
          </div>

          </div>



          <Toast dismissable={false} contentClass="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700" class="ml-10 w-64">
            <PapperPlaneOutline class="w-5 h-5 text-primary-600 dark:text-primary-500 rotate-45" />
            <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
          </Toast>
  

        </div>


      </div>

      <!-- navigations -->
      <div class="absolute bottom-0 flex flex-row ml-52">
        <div class="text-center mr-2">
          <Button on:click={() => (hidden2 = false)}>Show navigation</Button>
        </div>

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

        <div class="text-center">
          <Button on:click={() => (hidden8 = false)}>Show drawer</Button>
        </div>

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

    </div>
  </div>





<!-- prawa -->
<div class="absolute right-0 w-36 flex flex-col">

  <div>

    <!-- poczta -->
    <Button class="relative w-14 mt-2 ml-4 mb-10" size="sm">
      <EnvelopeSolid class="text-white dark:text-white" />
      <span class="sr-only">Notifications</span>
      <Indicator color="blue" border size="xl" placement="top-right" class="text-xs font-bold">18</Indicator>
    </Button>

  </div>


  <!-- guziki -->
  <div class="text-gray-900 dark:text-gray-100 pl-2">

    <Badge dismissable large color="dark" class="mb-2">Button</Badge>

    <ButtonGroup>
      <Button color="red" class="bg-main mb-2">Button</Button>
    </ButtonGroup>

    <ButtonGroup>
      <GradientButton shadow="green" color="green" class="shadow-accent bg-main mb-2">Button</GradientButton>
    </ButtonGroup>

    <ButtonGroup class="space-x-px mb-2">
      <GradientButton color="purpleToBlue">Button</GradientButton>
    </ButtonGroup>
    
  </div>

    <!-- strzalki -->
  <div class="flex flex-wrap items-center gap-2 pl-2">

    <div>
      <Button class="!p-2"><ArrowRightOutline class="w-5 h-5" /></Button>
      <Button pill={true} class="!p-2"><ArrowRightOutline class="w-4 h-4" /></Button>
    </div>

    <div class="mb-2">
      <Button outline={true} class="!p-2" size="lg">
        <ThumbsUpSolid class="w-5 h-5 text-primary-700" />
      </Button>

      <Button pill={true} outline={true} class="!p-2" size="xl">
        <ThumbsUpSolid class="w-4 h-4 text-primary-700" />
      </Button>
    </div>

  </div>

  <!-- loadingi -->

  <div class="pl-8">
    <Spinner color="gray" />
  </div>
  

</div>

<!-- loadingi -->
<div class="absolute right-0 flex flex-col mr-6 mt-96">
  <Button class="w-36 mb-2">
    <Spinner class="me-3" size="4" color="white" />Loading ...
  </Button>
  <Button color="alternative" class="w-36">
    <Spinner class="me-3" size="4" />Loading ...
  </Button>
</div>



 <!-- bottom nav -->
  <BottomNav navType="group" classInner="grid-cols-5" class="bottom-0 absolute">
    <BottomNavItem btnName="Home" id="group-home">
      <HomeSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false}>Home</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="Bookmark" id="group-bookmark">
      <BookmarkSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false}>Bookmark</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="New post" id="group-new">
      <PlusSolid class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false}>New Post</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="Search" id="group-search">
      <SearchOutline class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false}>Search</Tooltip>
    </BottomNavItem>
    <BottomNavItem btnName="Settings" id="group-settings">
      <AdjustmentsVerticalOutline class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
      <Tooltip arrow={false}>Settings</Tooltip>
    </BottomNavItem>
  </BottomNav>









