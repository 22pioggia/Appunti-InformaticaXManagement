*An activity diagram is an UML behavioral diagram which shows the flow of control or object flow with emphasis on the sequence and conditions of the flow. The actions coordinated by activity models can be initiated because other actions finish executing, because objects and data become available, or because some events external to the flow occur.*

*Activity diagrams can be used to depict the behavior of elements such as: classes, use cases, interfaces, components, operations of a class.*

*They can model: business processes, behavior associated to use cases, behavior of a class operation, an algorithm.*

- Activity diagrams, in UML 2.x are formalized to be based on Petri net-like semantics.
- The semantics of the system is described in terms of transitions between markings (distributions of tokens in the network).
- The keyword is: concurrency.

## Main elements of an AD
- Activity
- Activity nodes
	- Action
	- Object
	- Control
- Activity edges

![[Pasted image 20250531193346.png]]
![[Pasted image 20250531193404.png]]
##### Activity 
*An **activity** is a parametric behavior represented as coordinated flow of actions. The flow of execution is modeled as activity nodes connected by activity edges.* 

*An activity could be rendered as round-cornered rectangle with the activity name in the upper left corner and nodes and edges of the activity inside the rectangle.*

![[Pasted image 20250531193619.png|200]]
##### Actions 
*An **action** is a named element which represents a single atomic step within an activity.* 

*Actions are notated as round-cornered rectangles. Name or description of the action is placed inside of the rectangle. An action may have sets of incoming and outgoing activity edges that specify control flow and data flow from and to other nodes. An action will not begin execution until all of its input conditions are satisfied.*

There are various kinds of actions:
- Occurrences of primitive functions or call to operations.
- Communication actions, such as sending or receiving signals.
- Manipulations of objects, such as reading or writing attributes or associations.
- Invocations of behavior, such as activities.

![[Pasted image 20250531193757.png|200]]
##### Activity Edge 
*An **activity edge** is a directed connection between two activity nodes along which tokens may flow, from the source activity node to the target activity node. It is a generalization of control flow and object flow edges. Activity edge can have a guard - specification evaluated at runtime to determine if the edge can be traversed.*

![[Pasted image 20250531193911.png]]
##### Object
*An **object node** is an activity node that is part of defining object flow in an activity. It indicates that an instance of a particular Classifier, possibly in a particular state, may be available at a particular point in the activity.*

![[Pasted image 20250531194046.png|300]]
##### Input/output pins
***Input pins** are object nodes that receive values from other actions through object flows. Output pins are object nodes that deliver values to other actions through object flows.*

![[Pasted image 20250531194153.png|400]]
##### Activity Parameter Node
***Activity parameter nodes** are object nodes at the beginning and end of flows that provide a means to accept inputs to an activity and provide outputs from the activity, through the activity parameters.*

![[Pasted image 20250531194321.png|400]]
##### Connectors 
*An activity edge can be notated using a **connector**, which is a small circle with a name inside. Connectors are generally used to avoid drawing a long edge. This is purely notational. It does not affect the underlying model.*

![[Pasted image 20250531194418.png|300]]
##### Control
*A **control node** is an activity node used to coordinate the flows between other nodes. This includes: initial node, flow final node, activity final node, decision node, merge node, fork node, join node.*

![[Pasted image 20250531194515.png]]
##### Token competition
*Token are not “pushed” into actions, actions accept tokens. When an action completes, the token is released and it is offered to other actions downstram.*

![[Pasted image 20250531194646.png]]

- Token competition only really takes place on object nodes; to work as described the diagram should depict node pins.
- But: “To reduce clutter in complex diagrams, Pins may be elided”, so pins can be implicit.
- It is important, when assuming this viewpoint, that actions only have more outgoing edges only because we want competition (and only one incoming edge).
- Kind of a trick, but the diagram can be considered correct and such is for us

![[Pasted image 20250531200724.png|300]]
##### Expansion region
*An **expansion region** is a structured node that takes collections as input, acts on each element of the collections individually and produces elements to output collections. Elements processing can take place sequentially («iterative»), concurrently («parallel») or in a streamline («stream»).*

![[Pasted image 20250531195144.png|300]]
##### Activity Partition
*An **activity partition** is an activity group for actions that have some common characteristic.* 

*Partitions provide a constrained view on the behaviors invoked in activities and often correspond to organizational units or business actors in a business model.*

![[Pasted image 20250531195247.png|300]]

***Alternative notations*** 
*Using activity partitions is not the only way to associate actions and actors/classifiers. Preceding the name of the action with the actor/classifier name between parentheses can be used as well.*

![[Pasted image 20250531195349.png|200]]

***Activity Partition example***
![[Pasted image 20250531195446.png]]
## Interruptible regions and edges
*An interruptible activity region is a type of activity group which provides a mechanism for destroying all tokens and terminating all behaviors in the section of the activity enclosed within the boundary of the region. When a token is accepted by a special kind of edge called an interrupting edge, which is designated by a lightning bolt, it leaves the region and all other tokens are destroyed and behaviors within the region are terminated.*

![[Pasted image 20250531195841.png]]
## Event Actions
***Event actions** are used to model interaction taking place with elements outside the current activity.*

*Producing events is asynchnous, consuming events is synchrnous (i.e. blocking).*

![[Pasted image 20250531200420.png|450]]

[[(7) UML - Interaction diagrams|Next.]]









