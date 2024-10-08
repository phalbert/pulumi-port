// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Docs for the Action resource can be found [here](https://docs.getport.io/create-self-service-experiences/).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as port from "@pulumi/port";
 *
 * const createMicroservice = new port.index.Port_action("createMicroservice", {
 *     title: "Create Microservice",
 *     identifier: "create-microservice",
 *     icon: "Terraform",
 *     selfServiceTrigger: {
 *         operation: "CREATE",
 *         blueprintIdentifier: port_blueprint.microservice.identifier,
 *         userProperties: {
 *             stringProps: {
 *                 myStringIdentifier: {
 *                     title: "My String Identifier",
 *                     required: true,
 *                     format: "entity",
 *                     blueprint: port_blueprint.parent.identifier,
 *                     dataset: {
 *                         combinator: "and",
 *                         rules: [{
 *                             property: "$title",
 *                             operator: "contains",
 *                             value: {
 *                                 jqQuery: "\"specificValue\"",
 *                             },
 *                         }],
 *                     },
 *                     sort: {
 *                         property: "$updatedAt",
 *                         order: "DESC",
 *                     },
 *                 },
 *             },
 *             numberProps: {
 *                 myNumberIdentifier: {
 *                     title: "My Number Identifier",
 *                     required: true,
 *                     maximum: 100,
 *                     minimum: 0,
 *                 },
 *             },
 *             booleanProps: {
 *                 myBooleanIdentifier: {
 *                     title: "My Boolean Identifier",
 *                     required: true,
 *                 },
 *             },
 *             objectProps: {
 *                 myObjectIdentifier: {
 *                     title: "My Object Identifier",
 *                     required: true,
 *                 },
 *             },
 *             arrayProps: {
 *                 myArrayIdentifier: {
 *                     title: "My Array Identifier",
 *                     required: true,
 *                     stringItems: {
 *                         format: "entity",
 *                         blueprint: port_blueprint.parent.identifier,
 *                         dataset: JSON.stringify({
 *                             combinator: "and",
 *                             rules: [{
 *                                 property: "$title",
 *                                 operator: "contains",
 *                                 value: "specificValue",
 *                             }],
 *                         }),
 *                     },
 *                     sort: {
 *                         property: "$updatedAt",
 *                         order: "DESC",
 *                     },
 *                 },
 *             },
 *         },
 *     },
 *     kafkaMethod: {
 *         payload: JSON.stringify({
 *             runId: "{{.run.id}}",
 *         }),
 *     },
 * });
 * ```
 *
 * ### With Automation Trigger
 *
 * Port allows setting an automation trigger to an action, for executing an action based on event occurred to an entity in Port.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as port from "@pulumi/port";
 *
 * const deleteTemporaryMicroservice = new port.index.Port_action("deleteTemporaryMicroservice", {
 *     title: "Delete Temporary Microservice",
 *     identifier: "delete-temp-microservice",
 *     icon: "Terraform",
 *     automationTrigger: {
 *         timerPropertyExpiredEvent: {
 *             blueprintIdentifier: port_blueprint.microservice.identifier,
 *             propertyIdentifier: "ttl",
 *         },
 *     },
 *     kafkaMethod: {
 *         payload: JSON.stringify({
 *             runId: "{{.run.id}}",
 *         }),
 *     },
 * });
 * ```
 */
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
     * Automation trigger for the action
     */
    public readonly automationTrigger!: pulumi.Output<outputs.ActionAutomationTrigger | undefined>;
    /**
     * Azure DevOps invocation method
     */
    public readonly azureMethod!: pulumi.Output<outputs.ActionAzureMethod | undefined>;
    /**
     * The blueprint identifier the action relates to
     *
     * @deprecated Action is not attached to blueprint anymore. This value is ignored
     */
    public readonly blueprint!: pulumi.Output<string | undefined>;
    /**
     * Description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * GitHub invocation method
     */
    public readonly githubMethod!: pulumi.Output<outputs.ActionGithubMethod | undefined>;
    /**
     * Gitlab invocation method
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
     * Kafka invocation method
     */
    public readonly kafkaMethod!: pulumi.Output<outputs.ActionKafkaMethod | undefined>;
    /**
     * Publish action
     */
    public readonly publish!: pulumi.Output<boolean>;
    /**
     * Require approval before invoking the action. Can be one of "true", "false", "ANY" or "ALL"
     */
    public readonly requiredApproval!: pulumi.Output<string | undefined>;
    /**
     * Self service trigger for the action. Note: you can define only one of `orderProperties` and `steps`
     */
    public readonly selfServiceTrigger!: pulumi.Output<outputs.ActionSelfServiceTrigger | undefined>;
    /**
     * Title
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * Upsert Entity invocation method
     */
    public readonly upsertEntityMethod!: pulumi.Output<outputs.ActionUpsertEntityMethod | undefined>;
    /**
     * Webhook invocation method
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
            resourceInputs["automationTrigger"] = state ? state.automationTrigger : undefined;
            resourceInputs["azureMethod"] = state ? state.azureMethod : undefined;
            resourceInputs["blueprint"] = state ? state.blueprint : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["githubMethod"] = state ? state.githubMethod : undefined;
            resourceInputs["gitlabMethod"] = state ? state.gitlabMethod : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
            resourceInputs["kafkaMethod"] = state ? state.kafkaMethod : undefined;
            resourceInputs["publish"] = state ? state.publish : undefined;
            resourceInputs["requiredApproval"] = state ? state.requiredApproval : undefined;
            resourceInputs["selfServiceTrigger"] = state ? state.selfServiceTrigger : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
            resourceInputs["upsertEntityMethod"] = state ? state.upsertEntityMethod : undefined;
            resourceInputs["webhookMethod"] = state ? state.webhookMethod : undefined;
        } else {
            const args = argsOrState as ActionArgs | undefined;
            if ((!args || args.identifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identifier'");
            }
            resourceInputs["approvalEmailNotification"] = args ? args.approvalEmailNotification : undefined;
            resourceInputs["approvalWebhookNotification"] = args ? args.approvalWebhookNotification : undefined;
            resourceInputs["automationTrigger"] = args ? args.automationTrigger : undefined;
            resourceInputs["azureMethod"] = args ? args.azureMethod : undefined;
            resourceInputs["blueprint"] = args ? args.blueprint : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["githubMethod"] = args ? args.githubMethod : undefined;
            resourceInputs["gitlabMethod"] = args ? args.gitlabMethod : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["kafkaMethod"] = args ? args.kafkaMethod : undefined;
            resourceInputs["publish"] = args ? args.publish : undefined;
            resourceInputs["requiredApproval"] = args ? args.requiredApproval : undefined;
            resourceInputs["selfServiceTrigger"] = args ? args.selfServiceTrigger : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["upsertEntityMethod"] = args ? args.upsertEntityMethod : undefined;
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
     * Automation trigger for the action
     */
    automationTrigger?: pulumi.Input<inputs.ActionAutomationTrigger>;
    /**
     * Azure DevOps invocation method
     */
    azureMethod?: pulumi.Input<inputs.ActionAzureMethod>;
    /**
     * The blueprint identifier the action relates to
     *
     * @deprecated Action is not attached to blueprint anymore. This value is ignored
     */
    blueprint?: pulumi.Input<string>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * GitHub invocation method
     */
    githubMethod?: pulumi.Input<inputs.ActionGithubMethod>;
    /**
     * Gitlab invocation method
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
     * Kafka invocation method
     */
    kafkaMethod?: pulumi.Input<inputs.ActionKafkaMethod>;
    /**
     * Publish action
     */
    publish?: pulumi.Input<boolean>;
    /**
     * Require approval before invoking the action. Can be one of "true", "false", "ANY" or "ALL"
     */
    requiredApproval?: pulumi.Input<string>;
    /**
     * Self service trigger for the action. Note: you can define only one of `orderProperties` and `steps`
     */
    selfServiceTrigger?: pulumi.Input<inputs.ActionSelfServiceTrigger>;
    /**
     * Title
     */
    title?: pulumi.Input<string>;
    /**
     * Upsert Entity invocation method
     */
    upsertEntityMethod?: pulumi.Input<inputs.ActionUpsertEntityMethod>;
    /**
     * Webhook invocation method
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
     * Automation trigger for the action
     */
    automationTrigger?: pulumi.Input<inputs.ActionAutomationTrigger>;
    /**
     * Azure DevOps invocation method
     */
    azureMethod?: pulumi.Input<inputs.ActionAzureMethod>;
    /**
     * The blueprint identifier the action relates to
     *
     * @deprecated Action is not attached to blueprint anymore. This value is ignored
     */
    blueprint?: pulumi.Input<string>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * GitHub invocation method
     */
    githubMethod?: pulumi.Input<inputs.ActionGithubMethod>;
    /**
     * Gitlab invocation method
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
     * Kafka invocation method
     */
    kafkaMethod?: pulumi.Input<inputs.ActionKafkaMethod>;
    /**
     * Publish action
     */
    publish?: pulumi.Input<boolean>;
    /**
     * Require approval before invoking the action. Can be one of "true", "false", "ANY" or "ALL"
     */
    requiredApproval?: pulumi.Input<string>;
    /**
     * Self service trigger for the action. Note: you can define only one of `orderProperties` and `steps`
     */
    selfServiceTrigger?: pulumi.Input<inputs.ActionSelfServiceTrigger>;
    /**
     * Title
     */
    title?: pulumi.Input<string>;
    /**
     * Upsert Entity invocation method
     */
    upsertEntityMethod?: pulumi.Input<inputs.ActionUpsertEntityMethod>;
    /**
     * Webhook invocation method
     */
    webhookMethod?: pulumi.Input<inputs.ActionWebhookMethod>;
}
