// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Action extends pulumi.CustomResource {
    /**
     * Get an existing Action resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActionState, opts?: pulumi.CustomResourceOptions): Action {
        return new Action(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'port:index/action:Action';

    /**
     * Returns true if the given object is an instance of Action.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Action {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Action.__pulumiType;
    }

    /**
     * The email notification of the approval
     */
    public readonly approvalEmailNotification!: pulumi.Output<outputs.ActionApprovalEmailNotification | undefined>;
    /**
     * The webhook notification of the approval
     */
    public readonly approvalWebhookNotification!: pulumi.Output<outputs.ActionApprovalWebhookNotification | undefined>;
    /**
     * The invocation method of the action
     */
    public readonly azureMethod!: pulumi.Output<outputs.ActionAzureMethod | undefined>;
    /**
     * The blueprint identifier the action relates to
     */
    public readonly blueprint!: pulumi.Output<string>;
    /**
     * Description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The invocation method of the action
     */
    public readonly githubMethod!: pulumi.Output<outputs.ActionGithubMethod | undefined>;
    /**
     * The invocation method of the action
     */
    public readonly gitlabMethod!: pulumi.Output<outputs.ActionGitlabMethod | undefined>;
    /**
     * Icon
     */
    public readonly icon!: pulumi.Output<string | undefined>;
    /**
     * Identifier
     */
    public readonly identifier!: pulumi.Output<string>;
    /**
     * The invocation method of the action
     */
    public readonly kafkaMethod!: pulumi.Output<outputs.ActionKafkaMethod | undefined>;
    /**
     * Order properties
     */
    public readonly orderProperties!: pulumi.Output<string[] | undefined>;
    /**
     * Require approval before invoking the action
     */
    public readonly requiredApproval!: pulumi.Output<boolean | undefined>;
    /**
     * Title
     */
    public readonly title!: pulumi.Output<string>;
    /**
     * The trigger type of the action
     */
    public readonly trigger!: pulumi.Output<string>;
    /**
     * User properties
     */
    public readonly userProperties!: pulumi.Output<outputs.ActionUserProperties | undefined>;
    /**
     * The invocation method of the action
     */
    public readonly webhookMethod!: pulumi.Output<outputs.ActionWebhookMethod | undefined>;

    /**
     * Create a Action resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActionArgs | ActionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ActionState | undefined;
            resourceInputs["approvalEmailNotification"] = state ? state.approvalEmailNotification : undefined;
            resourceInputs["approvalWebhookNotification"] = state ? state.approvalWebhookNotification : undefined;
            resourceInputs["azureMethod"] = state ? state.azureMethod : undefined;
            resourceInputs["blueprint"] = state ? state.blueprint : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["githubMethod"] = state ? state.githubMethod : undefined;
            resourceInputs["gitlabMethod"] = state ? state.gitlabMethod : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
            resourceInputs["kafkaMethod"] = state ? state.kafkaMethod : undefined;
            resourceInputs["orderProperties"] = state ? state.orderProperties : undefined;
            resourceInputs["requiredApproval"] = state ? state.requiredApproval : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
            resourceInputs["trigger"] = state ? state.trigger : undefined;
            resourceInputs["userProperties"] = state ? state.userProperties : undefined;
            resourceInputs["webhookMethod"] = state ? state.webhookMethod : undefined;
        } else {
            const args = argsOrState as ActionArgs | undefined;
            if ((!args || args.blueprint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blueprint'");
            }
            if ((!args || args.identifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identifier'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            if ((!args || args.trigger === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trigger'");
            }
            resourceInputs["approvalEmailNotification"] = args ? args.approvalEmailNotification : undefined;
            resourceInputs["approvalWebhookNotification"] = args ? args.approvalWebhookNotification : undefined;
            resourceInputs["azureMethod"] = args ? args.azureMethod : undefined;
            resourceInputs["blueprint"] = args ? args.blueprint : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["githubMethod"] = args ? args.githubMethod : undefined;
            resourceInputs["gitlabMethod"] = args ? args.gitlabMethod : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["kafkaMethod"] = args ? args.kafkaMethod : undefined;
            resourceInputs["orderProperties"] = args ? args.orderProperties : undefined;
            resourceInputs["requiredApproval"] = args ? args.requiredApproval : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["trigger"] = args ? args.trigger : undefined;
            resourceInputs["userProperties"] = args ? args.userProperties : undefined;
            resourceInputs["webhookMethod"] = args ? args.webhookMethod : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Action.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Action resources.
 */
export interface ActionState {
    /**
     * The email notification of the approval
     */
    approvalEmailNotification?: pulumi.Input<inputs.ActionApprovalEmailNotification>;
    /**
     * The webhook notification of the approval
     */
    approvalWebhookNotification?: pulumi.Input<inputs.ActionApprovalWebhookNotification>;
    /**
     * The invocation method of the action
     */
    azureMethod?: pulumi.Input<inputs.ActionAzureMethod>;
    /**
     * The blueprint identifier the action relates to
     */
    blueprint?: pulumi.Input<string>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The invocation method of the action
     */
    githubMethod?: pulumi.Input<inputs.ActionGithubMethod>;
    /**
     * The invocation method of the action
     */
    gitlabMethod?: pulumi.Input<inputs.ActionGitlabMethod>;
    /**
     * Icon
     */
    icon?: pulumi.Input<string>;
    /**
     * Identifier
     */
    identifier?: pulumi.Input<string>;
    /**
     * The invocation method of the action
     */
    kafkaMethod?: pulumi.Input<inputs.ActionKafkaMethod>;
    /**
     * Order properties
     */
    orderProperties?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Require approval before invoking the action
     */
    requiredApproval?: pulumi.Input<boolean>;
    /**
     * Title
     */
    title?: pulumi.Input<string>;
    /**
     * The trigger type of the action
     */
    trigger?: pulumi.Input<string>;
    /**
     * User properties
     */
    userProperties?: pulumi.Input<inputs.ActionUserProperties>;
    /**
     * The invocation method of the action
     */
    webhookMethod?: pulumi.Input<inputs.ActionWebhookMethod>;
}

/**
 * The set of arguments for constructing a Action resource.
 */
export interface ActionArgs {
    /**
     * The email notification of the approval
     */
    approvalEmailNotification?: pulumi.Input<inputs.ActionApprovalEmailNotification>;
    /**
     * The webhook notification of the approval
     */
    approvalWebhookNotification?: pulumi.Input<inputs.ActionApprovalWebhookNotification>;
    /**
     * The invocation method of the action
     */
    azureMethod?: pulumi.Input<inputs.ActionAzureMethod>;
    /**
     * The blueprint identifier the action relates to
     */
    blueprint: pulumi.Input<string>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The invocation method of the action
     */
    githubMethod?: pulumi.Input<inputs.ActionGithubMethod>;
    /**
     * The invocation method of the action
     */
    gitlabMethod?: pulumi.Input<inputs.ActionGitlabMethod>;
    /**
     * Icon
     */
    icon?: pulumi.Input<string>;
    /**
     * Identifier
     */
    identifier: pulumi.Input<string>;
    /**
     * The invocation method of the action
     */
    kafkaMethod?: pulumi.Input<inputs.ActionKafkaMethod>;
    /**
     * Order properties
     */
    orderProperties?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Require approval before invoking the action
     */
    requiredApproval?: pulumi.Input<boolean>;
    /**
     * Title
     */
    title: pulumi.Input<string>;
    /**
     * The trigger type of the action
     */
    trigger: pulumi.Input<string>;
    /**
     * User properties
     */
    userProperties?: pulumi.Input<inputs.ActionUserProperties>;
    /**
     * The invocation method of the action
     */
    webhookMethod?: pulumi.Input<inputs.ActionWebhookMethod>;
}
