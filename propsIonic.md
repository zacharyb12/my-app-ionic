
# IonContent
	fullscreen         : true | false
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	scrollEvents       : true | false
	forceOverscroll    : true | false
	className          : string

# IonHeader / IonFooter
	translucent        : true | false
	collapse           : true | false
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"

# IonToolbar
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	translucent        : true | false

# IonTitle
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	size               : "large" | "default" | "small"

# IonButtons
	slot               : "start" | "end" | "primary" | "secondary"

# IonButton
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	shape              : "round"
	expand             : "full" | "block"
	fill               : "clear" | "outline" | "solid"
	size               : "small" | "default" | "large"
	routerLink         : string
	routerDirection    : "forward" | "back"
	disabled           : true | false

# IonIcon
	icon               : Icon (ex: heart, star...)
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	size               : "small" | "large" | "default"

# IonLabel
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	position           : "fixed" | "floating" | "stacked"

# IonItem
	button             : true | false
	detail             : true | false
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	lines              : "none" | "full" | "inset"
	routerLink         : string

# IonList
	inset              : true | false
	lines              : "none" | "full" | "inset"

# IonBadge
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"

# IonAvatar
	(aucune)

# IonCard (& Header, Title, Subtitle)
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	button             : true | false
	routerLink         : string

# IonInput
	value              : string | number
	placeholder        : string
	type               : "text" | "number" | "email" | "password"
	clearInput         : true | false
	debounce           : number
	disabled           : true | false
	maxlength          : number
	onIonChange        : function
	onIonInput         : function

# IonTextarea
	rows               : number
	placeholder        : string
	autoGrow           : true | false
	onIonChange        : function

# IonSelect
	value              : string | number
	interface          : "alert" | "action-sheet" | "popover"
	multiple           : true | false
	cancelText         : string
	okText             : string
	placeholder        : string

# IonToggle
	checked            : true | false
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	disabled           : true | false

# IonCheckbox
	checked            : true | false
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	disabled           : true | false

# IonRange
	min                : number
	max                : number
	step               : number
	snaps              : true | false
	ticks              : true | false

# IonRadioGroup & IonRadio
	value              : string | number
	checked            : true | false

# IonRouterOutlet
	id                 : string (obligatoire si IonMenu existe)
	animated           : true | false

# Route (React Router)
	path               : string
	component          : React.Component
	exact              : true | false

# IonTabBar
	slot               : "bottom" | "top"
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"

# IonTabButton
	tab                : string
	href               : string
	disabled           : true | false

# IonMenu
	contentId          : string (obligatoire)
	side               : "start" | "end"
	type               : "overlay" | "push" | "reveal"
	disabled           : true | false

# IonMenuButton
	autoHide           : true | false

# IonActionSheet
	trigger            : string
	header             : string
	subHeader          : string
	buttons            : array

# IonAlert
	trigger            : string
	header             : string
	message            : string
	buttons            : array
	inputs             : array

# IonModal
	isOpen             : true | false
	trigger            : string
	backdropDismiss    : true | false
	initialBreakpoint  : number
	breakpoints        : array

# IonToast
	isOpen             : true | false
	message            : string
	color              : "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
	duration           : number

# IonLoading
	isOpen             : true | false
	message            : string
	spinner            : string

# IonAccordionGroup / IonAccordion
	value              : string | number
	multiple           : true | false

# IonBreadcrumbs / IonBreadcrumb
	href               : string
	maxItems           : number
	itemsBeforeCollapse: number
	itemsAfterCollapse : number

# IonInfiniteScroll
	threshold          : string | number
	disabled           : true | false
	onIonInfinite      : function

# IonRefresher
	onIonRefresh       : function

# IonFab / IonFabButton
	vertical           : "top" | "middle" | "bottom"
	horizontal         : "start" | "center" | "end"
	slot               : "fixed"

# IonGrid / IonRow / IonCol
	size               : string | number
	offset             : string | number
	push               : string | number
	pull               : string | number