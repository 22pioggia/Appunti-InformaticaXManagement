*Use case diagrams are behavior diagrams used to describe a **set of actions** (use cases) that a **system** (subject) should or can perform in collaboration with one or more **external** users of the system (actors).* 

*Each use case should provide some observable and valuable result to the actors or other stakeholders of the system.*

>A use case is a list of actions or event steps typically defining the **interactions** between a role (or **actor**) and a **system** to achieve a **goal**.

Use case diagrams are used to specify:
- (external) requirements on a subject, required usages of a system - to capture what a system under construction is supposed to do;
- the functionality offered by a subject – what system can do;
- requirements the specified subject poses on its environment - by defining how environment should interact with the subject so that it will be able to perform its services.

UC elements
![[Pasted image 20250530190726.png|400]]

- **Actor**
	- In UML an **actor** is behaviored classifier which specifies a role played by an **external entity** that interacts with the **subject** (e.g., by exchanging signals and data), a human user of the designed system, some other system or hardware using services of the subject. 
	- The standard UML notation for an actor is the "stick man" icon with the name of the actor above or below of the icon. Custom icons that convey the kind of actor may also be used to denote an actor, such as using a separate icon(s) for non-human actors.
- **Subject**
	- The **subject** is the **system under analysis** or design to which a set of use cases apply. The subject could be a business, software system, physical system, or a smaller subsystem having some behavior. In UML terms, subject is a use case classifier playing the "subject" role. 
	- Subject is presented by a rectangle with subject name in upper corner with the applicable use cases inside the rectangle and actors - outside of the system boundaries.
- **Use case**
	- In UML a **use case** is a behaviored classifier which specifies the behavior of a subject by describing a set of **sequences of actions** performed by the system to yield an **observable result** of some value to one or more actors or other stakeholders of the system. In other words, each use case describes a unit of complete and useful functionality that the subject provides to its users. 
	- Use case is usually shown as an ellipse containing the name of the use case.

We can define abstract or concrete actors and specialize them using generalization relationship. 

Generalization between actors is rendered as a solid directed line with a large arrowhead (same as for generalization between classes).

![[Pasted image 20250530191222.png|200]]

- Each use case specifies a unit of useful functionality that the subject provides to actors. This functionality should be initiated by an actor. Actors may be connected to use cases only by binary association relationship.
- ![[Pasted image 20250530191422.png|300]]

Use cases could be organized using the following relationships:
- generalization
- extend 
- include 
- (association)

- Generalization is shown as a solid directed line with a large hollow triangle arrowhead, the same as for generalization between classifiers, directed from the more specific use case to the general use case.
- ![[Pasted image 20250530191548.png|300]]

***Extend Relationship*** 
- Extend is a directed relationship that specifies how and when the behavior defined in a supplementary extending use case can be inserted into the behavior defined in the extended use case.
- The extension takes place at one or more extension points defined in the extended use case. 
- Extend relationship is shown as a dashed line with an open arrowhead directed from the extending use case to the extended (base) use case. The arrow is labeled with the keyword «extend».

- Extension Point 
	- An extension point is a feature of a use case which identifies (references) a point in the behavior of the use case where that behavior can be extended by some other (extending) use case, as specified by extend relationship. 
	- Extension points may be shown in a compartment of the use case oval symbol under the heading extension points. Each extension point must have a name, unique within a use case.

![[Pasted image 20250530191753.png|400]]

***Include Relationship*** 
- An include relationship is a directed relationship between two use cases when a required, not optional behavior of the included use case is inserted into the behavior of the including use case. 
- The include relationship could be used:
	- when there are common parts of the behavior of two or more use cases;
	- to simplify large use case by splitting it into several use cases.
- The include relationship between use cases is shown by a dashed arrow with an open arrowhead from the including (base) use case to the included (common part) use case. The arrow is labeled with the keyword «include».

![[Pasted image 20250530204215.png|400]]

***Uc diagram example***
![[Pasted image 20250530204632.png]]

***UC do's and don'ts***
- Avoid interface creeping (no UI details in UCs)
- Don't decompose for other reasons than reuse
- Master the differences between generalization, include and extend
- Do not create new stereotyped relationships
- Remember: actors are external to the system (for system UCs)
- Time can be an actor

![[Pasted image 20250530205209.png|700]]

- A UML use case diagram is NOT a use case model
- The diagram can be seen as a summary
- Missing aspects;
	- When the UC applies, associated non-functional requirement, pre/post-conditions, …
	- Details about the interaction steps
- There is NO a standard notation to model use case details. Several textual templates have been proposed.

## Cockburn’s “fully dressed”
- Title: "an active-verb goal phrase that names the goal of the primary actor"
- Primary Actor
- Goal in Context
- Scope
- Level
- Stakeholders and Interests
- Precondition
- Minimal Guarantees
- Success Guarantees
- Trigger
- Main Success Scenario
- Extensions
- Technology & Data Variations List
- Related Information.

![[Pasted image 20250530205505.png|400]]

>A simpler UC specification template 
- ID
- Actors
- Pre-conditions
- Main sequence
- Alternative sequences
- Post-conditions

- **Pre-conditions** are prerequisites that have to be valid in order for the use case to take place
- **Post-conditions** are changes to the state of the system or its environment that take place when the use case is terminated

[[(4) Software project model|Next.]]