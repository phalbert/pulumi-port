// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package port

import (
	"context"
	"reflect"

	"errors"
	"github.com/port-labs/pulumi-port/sdk/v2/go/port/internal"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type Page struct {
	pulumi.CustomResourceState

	// The identifier of the page/folder after which the page should be placed
	After pulumi.StringPtrOutput `pulumi:"after"`
	// The blueprint for which the page is created, relevant only for pages of type "blueprint-entities"
	Blueprint pulumi.StringPtrOutput `pulumi:"blueprint"`
	// The creation date of the page
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// The creator of the page
	CreatedBy pulumi.StringOutput `pulumi:"createdBy"`
	// The page description
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// The icon of the page
	Icon pulumi.StringPtrOutput `pulumi:"icon"`
	// The Identifier of the page
	Identifier pulumi.StringOutput `pulumi:"identifier"`
	// Whether the page is locked, if true, viewers will not be able to edit the page widgets and filters
	Locked pulumi.BoolPtrOutput `pulumi:"locked"`
	// The identifier of the folder in which the page is in, default is the root of the sidebar
	Parent pulumi.StringPtrOutput `pulumi:"parent"`
	// The title of the page
	Title pulumi.StringPtrOutput `pulumi:"title"`
	// The type of the page, can be one of "blueprint-entities", "dashboard" or "home"
	Type pulumi.StringOutput `pulumi:"type"`
	// The last update date of the page
	UpdatedAt pulumi.StringOutput `pulumi:"updatedAt"`
	// The last updater of the page
	UpdatedBy pulumi.StringOutput `pulumi:"updatedBy"`
	// The widgets of the page
	Widgets pulumi.StringArrayOutput `pulumi:"widgets"`
}

// NewPage registers a new resource with the given unique name, arguments, and options.
func NewPage(ctx *pulumi.Context,
	name string, args *PageArgs, opts ...pulumi.ResourceOption) (*Page, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Identifier == nil {
		return nil, errors.New("invalid value for required argument 'Identifier'")
	}
	if args.Type == nil {
		return nil, errors.New("invalid value for required argument 'Type'")
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource Page
	err := ctx.RegisterResource("port:index/page:Page", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPage gets an existing Page resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPage(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PageState, opts ...pulumi.ResourceOption) (*Page, error) {
	var resource Page
	err := ctx.ReadResource("port:index/page:Page", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Page resources.
type pageState struct {
	// The identifier of the page/folder after which the page should be placed
	After *string `pulumi:"after"`
	// The blueprint for which the page is created, relevant only for pages of type "blueprint-entities"
	Blueprint *string `pulumi:"blueprint"`
	// The creation date of the page
	CreatedAt *string `pulumi:"createdAt"`
	// The creator of the page
	CreatedBy *string `pulumi:"createdBy"`
	// The page description
	Description *string `pulumi:"description"`
	// The icon of the page
	Icon *string `pulumi:"icon"`
	// The Identifier of the page
	Identifier *string `pulumi:"identifier"`
	// Whether the page is locked, if true, viewers will not be able to edit the page widgets and filters
	Locked *bool `pulumi:"locked"`
	// The identifier of the folder in which the page is in, default is the root of the sidebar
	Parent *string `pulumi:"parent"`
	// The title of the page
	Title *string `pulumi:"title"`
	// The type of the page, can be one of "blueprint-entities", "dashboard" or "home"
	Type *string `pulumi:"type"`
	// The last update date of the page
	UpdatedAt *string `pulumi:"updatedAt"`
	// The last updater of the page
	UpdatedBy *string `pulumi:"updatedBy"`
	// The widgets of the page
	Widgets []string `pulumi:"widgets"`
}

type PageState struct {
	// The identifier of the page/folder after which the page should be placed
	After pulumi.StringPtrInput
	// The blueprint for which the page is created, relevant only for pages of type "blueprint-entities"
	Blueprint pulumi.StringPtrInput
	// The creation date of the page
	CreatedAt pulumi.StringPtrInput
	// The creator of the page
	CreatedBy pulumi.StringPtrInput
	// The page description
	Description pulumi.StringPtrInput
	// The icon of the page
	Icon pulumi.StringPtrInput
	// The Identifier of the page
	Identifier pulumi.StringPtrInput
	// Whether the page is locked, if true, viewers will not be able to edit the page widgets and filters
	Locked pulumi.BoolPtrInput
	// The identifier of the folder in which the page is in, default is the root of the sidebar
	Parent pulumi.StringPtrInput
	// The title of the page
	Title pulumi.StringPtrInput
	// The type of the page, can be one of "blueprint-entities", "dashboard" or "home"
	Type pulumi.StringPtrInput
	// The last update date of the page
	UpdatedAt pulumi.StringPtrInput
	// The last updater of the page
	UpdatedBy pulumi.StringPtrInput
	// The widgets of the page
	Widgets pulumi.StringArrayInput
}

func (PageState) ElementType() reflect.Type {
	return reflect.TypeOf((*pageState)(nil)).Elem()
}

type pageArgs struct {
	// The identifier of the page/folder after which the page should be placed
	After *string `pulumi:"after"`
	// The blueprint for which the page is created, relevant only for pages of type "blueprint-entities"
	Blueprint *string `pulumi:"blueprint"`
	// The page description
	Description *string `pulumi:"description"`
	// The icon of the page
	Icon *string `pulumi:"icon"`
	// The Identifier of the page
	Identifier string `pulumi:"identifier"`
	// Whether the page is locked, if true, viewers will not be able to edit the page widgets and filters
	Locked *bool `pulumi:"locked"`
	// The identifier of the folder in which the page is in, default is the root of the sidebar
	Parent *string `pulumi:"parent"`
	// The title of the page
	Title *string `pulumi:"title"`
	// The type of the page, can be one of "blueprint-entities", "dashboard" or "home"
	Type string `pulumi:"type"`
	// The widgets of the page
	Widgets []string `pulumi:"widgets"`
}

// The set of arguments for constructing a Page resource.
type PageArgs struct {
	// The identifier of the page/folder after which the page should be placed
	After pulumi.StringPtrInput
	// The blueprint for which the page is created, relevant only for pages of type "blueprint-entities"
	Blueprint pulumi.StringPtrInput
	// The page description
	Description pulumi.StringPtrInput
	// The icon of the page
	Icon pulumi.StringPtrInput
	// The Identifier of the page
	Identifier pulumi.StringInput
	// Whether the page is locked, if true, viewers will not be able to edit the page widgets and filters
	Locked pulumi.BoolPtrInput
	// The identifier of the folder in which the page is in, default is the root of the sidebar
	Parent pulumi.StringPtrInput
	// The title of the page
	Title pulumi.StringPtrInput
	// The type of the page, can be one of "blueprint-entities", "dashboard" or "home"
	Type pulumi.StringInput
	// The widgets of the page
	Widgets pulumi.StringArrayInput
}

func (PageArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*pageArgs)(nil)).Elem()
}

type PageInput interface {
	pulumi.Input

	ToPageOutput() PageOutput
	ToPageOutputWithContext(ctx context.Context) PageOutput
}

func (*Page) ElementType() reflect.Type {
	return reflect.TypeOf((**Page)(nil)).Elem()
}

func (i *Page) ToPageOutput() PageOutput {
	return i.ToPageOutputWithContext(context.Background())
}

func (i *Page) ToPageOutputWithContext(ctx context.Context) PageOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PageOutput)
}

// PageArrayInput is an input type that accepts PageArray and PageArrayOutput values.
// You can construct a concrete instance of `PageArrayInput` via:
//
//	PageArray{ PageArgs{...} }
type PageArrayInput interface {
	pulumi.Input

	ToPageArrayOutput() PageArrayOutput
	ToPageArrayOutputWithContext(context.Context) PageArrayOutput
}

type PageArray []PageInput

func (PageArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Page)(nil)).Elem()
}

func (i PageArray) ToPageArrayOutput() PageArrayOutput {
	return i.ToPageArrayOutputWithContext(context.Background())
}

func (i PageArray) ToPageArrayOutputWithContext(ctx context.Context) PageArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PageArrayOutput)
}

// PageMapInput is an input type that accepts PageMap and PageMapOutput values.
// You can construct a concrete instance of `PageMapInput` via:
//
//	PageMap{ "key": PageArgs{...} }
type PageMapInput interface {
	pulumi.Input

	ToPageMapOutput() PageMapOutput
	ToPageMapOutputWithContext(context.Context) PageMapOutput
}

type PageMap map[string]PageInput

func (PageMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Page)(nil)).Elem()
}

func (i PageMap) ToPageMapOutput() PageMapOutput {
	return i.ToPageMapOutputWithContext(context.Background())
}

func (i PageMap) ToPageMapOutputWithContext(ctx context.Context) PageMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PageMapOutput)
}

type PageOutput struct{ *pulumi.OutputState }

func (PageOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Page)(nil)).Elem()
}

func (o PageOutput) ToPageOutput() PageOutput {
	return o
}

func (o PageOutput) ToPageOutputWithContext(ctx context.Context) PageOutput {
	return o
}

// The identifier of the page/folder after which the page should be placed
func (o PageOutput) After() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Page) pulumi.StringPtrOutput { return v.After }).(pulumi.StringPtrOutput)
}

// The blueprint for which the page is created, relevant only for pages of type "blueprint-entities"
func (o PageOutput) Blueprint() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Page) pulumi.StringPtrOutput { return v.Blueprint }).(pulumi.StringPtrOutput)
}

// The creation date of the page
func (o PageOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *Page) pulumi.StringOutput { return v.CreatedAt }).(pulumi.StringOutput)
}

// The creator of the page
func (o PageOutput) CreatedBy() pulumi.StringOutput {
	return o.ApplyT(func(v *Page) pulumi.StringOutput { return v.CreatedBy }).(pulumi.StringOutput)
}

// The page description
func (o PageOutput) Description() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Page) pulumi.StringPtrOutput { return v.Description }).(pulumi.StringPtrOutput)
}

// The icon of the page
func (o PageOutput) Icon() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Page) pulumi.StringPtrOutput { return v.Icon }).(pulumi.StringPtrOutput)
}

// The Identifier of the page
func (o PageOutput) Identifier() pulumi.StringOutput {
	return o.ApplyT(func(v *Page) pulumi.StringOutput { return v.Identifier }).(pulumi.StringOutput)
}

// Whether the page is locked, if true, viewers will not be able to edit the page widgets and filters
func (o PageOutput) Locked() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v *Page) pulumi.BoolPtrOutput { return v.Locked }).(pulumi.BoolPtrOutput)
}

// The identifier of the folder in which the page is in, default is the root of the sidebar
func (o PageOutput) Parent() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Page) pulumi.StringPtrOutput { return v.Parent }).(pulumi.StringPtrOutput)
}

// The title of the page
func (o PageOutput) Title() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Page) pulumi.StringPtrOutput { return v.Title }).(pulumi.StringPtrOutput)
}

// The type of the page, can be one of "blueprint-entities", "dashboard" or "home"
func (o PageOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func(v *Page) pulumi.StringOutput { return v.Type }).(pulumi.StringOutput)
}

// The last update date of the page
func (o PageOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *Page) pulumi.StringOutput { return v.UpdatedAt }).(pulumi.StringOutput)
}

// The last updater of the page
func (o PageOutput) UpdatedBy() pulumi.StringOutput {
	return o.ApplyT(func(v *Page) pulumi.StringOutput { return v.UpdatedBy }).(pulumi.StringOutput)
}

// The widgets of the page
func (o PageOutput) Widgets() pulumi.StringArrayOutput {
	return o.ApplyT(func(v *Page) pulumi.StringArrayOutput { return v.Widgets }).(pulumi.StringArrayOutput)
}

type PageArrayOutput struct{ *pulumi.OutputState }

func (PageArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Page)(nil)).Elem()
}

func (o PageArrayOutput) ToPageArrayOutput() PageArrayOutput {
	return o
}

func (o PageArrayOutput) ToPageArrayOutputWithContext(ctx context.Context) PageArrayOutput {
	return o
}

func (o PageArrayOutput) Index(i pulumi.IntInput) PageOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *Page {
		return vs[0].([]*Page)[vs[1].(int)]
	}).(PageOutput)
}

type PageMapOutput struct{ *pulumi.OutputState }

func (PageMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Page)(nil)).Elem()
}

func (o PageMapOutput) ToPageMapOutput() PageMapOutput {
	return o
}

func (o PageMapOutput) ToPageMapOutputWithContext(ctx context.Context) PageMapOutput {
	return o
}

func (o PageMapOutput) MapIndex(k pulumi.StringInput) PageOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *Page {
		return vs[0].(map[string]*Page)[vs[1].(string)]
	}).(PageOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*PageInput)(nil)).Elem(), &Page{})
	pulumi.RegisterInputType(reflect.TypeOf((*PageArrayInput)(nil)).Elem(), PageArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*PageMapInput)(nil)).Elem(), PageMap{})
	pulumi.RegisterOutputType(PageOutput{})
	pulumi.RegisterOutputType(PageArrayOutput{})
	pulumi.RegisterOutputType(PageMapOutput{})
}
