## Software and quality
- **External qualities** - *Qualities the end user can perceive*
	- Functional
	- Non functional
- **Internal qualities** - *Qualities related to how the software is organized*

***External qualities***
- Correctness
- Usability
- Efficiency
- Reliability
- Integrity
- Adaptability
- Accuracy
- Robustness

**Internal qualities**
- Maintainability
- Flexibility
- Portability
- Re-usability
- Readability
- Testability
- Understandability

**Software is not write-once**
*Costs associated with software evolution are high, an estimated 50%–90% of total software production costs.*
### SquaRE – ISO 25010
*Software product Quality Requirements and Evaluation.*

*An evolution of ISO 9126 (and ISO 14598).*

*Three quality models: software product quality model, data quality model, quality in use model.*

*Software product quality (characteristics can be measured internally or externally).*

- Functional suitability
- Reliability
- Performance efficiency 
- Operability
- Security
- Compatibility
- Maintainability
- Portability

Quality in use
- Effectiveness
- Efficiency
- Satisfaction
- Safety
- Usability

>Do we need a framework to assess quality ?
- Yes, at times.
- But most of the times we just want our software to be reusable and ***designed for change***.
## OO Principles
*We design OO systems, so we have to correctly identify our objects and find the right mix of encapsulation, inheritance and polymorphism in order to obtain high-quality software.*

*Principles can be used to guarantee the maximization of software qualities.*

*Basic OO concepts*
- **Abstraction**: focus on essential characteristics (w.r.t. the perspective of the viewer).
- **Encapsulation**: hide the details (your status).
- **Inheritance**: behavior and state can be specialized.
- **Polymorphism**: behavior depends on who you are.
### Design smells
- ***Rigidity***
	- *the tendency for software to be difficult to change, even in simple ways. A design is rigid if a single change causes a cascade of subsequent changes in dependent modules. The more modules that must be changed, the more rigid the design.*
- ***Fragility***
	- *the tendency of a program to break in many places when a single change is made. Often, the new problems are in areas that have no conceptual relationship with the area that was changed. Fixing those problems leads to even more problems.*
- ***Immobility***
	- *A design is immobile when it contains parts that could be useful in other systems, but the effort and risk involved with separating those parts from the original system are too great. This is an unfortunate but very common occurrence.*
- ***Viscosity***
	- *Viscosity of the software: some options to make changes in a software system preserve the design; others do not. When the design-preserving methods are more difficult to use than the hacks, the viscosity of the design is high.*
	- *Viscosity of environment: when the development environment is slow and inefficient.*
- ***Needless complexity***
	- *Needless complexity of a design in when it contains elements that aren't currently useful. This frequently happens when developers anticipate changes to the requirements and put facilities in the software to deal with those potential changes.*
- ***Needless repetition***
	- *Needless repetition: copy and paste may be useful text-editing operations, but they can be disastrous code-editing operations. When the same code appears over and over again, in slightly different forms, the developers are missing an abstraction.*
- ***Opacity***
	- *the tendency of a module to be difficult to understand. Code can be written in a clear and expressive manner, or it can be written in an opaque and convoluted manner. Code that evolves over time tends to become more and more opaque with age. A constant effort to keep the code clear and expressive is required in order to keep opacity to a minimum.*
### Dependencies
- The root cause for most smells can be traced back to dependency management.
- Dependencies are potential paths for the diffusion of changes.
	- From UML’s definition of dependency: *“Indicates that changes to one model element \[...] can cause changes in another model element”*.
### SOLID
#### SRP: Single responsibility principle
- A class should have one, and only one, reason to change.
- Each responsibility is an axis of change.
- If a class has more than one responsibility, the responsibilities become coupled. Changes to one responsibility may impair or inhibit the class's ability to meet the others. This kind of coupling leads to **fragile** designs.
#### OCP: open-closed principle
- A class should be open for extension, but closed for modification .
	- Can be generalized to: software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
- Failing to respect OCP leads to a change resulting in cascades of changes (rigidity). OCP advises us to refactor our design to avoid that.

**Refactoring ->** a disciplined technique for restructuring a software system so that its internal structure is modified without changing its external behavior
#### LSP: Liskov substitution principle
- The relation among classes in a hierarchy should be sub-typing
- *“What is wanted here is something like the following substitution property: If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2 then S is a **subtype** of T.”*

If a method f, accepting as argument a reference to B, misbehaves when is passed a reference to an instance of D, subclass of B, then D is fragile in the presence of f. 

>The Liskov Substitution Principle is one of the prime enablers of OCP.
##### Rules to guarantee respect of LSP
- ***Structural***
	- Contravariance of method parameter types
	- Covariance of method return types
	- No new exceptions
- ***Behavioral***
	- Preconditions cannot be strengthened in the subtype
	- Postconditions and invariants cannot be weakened in the subtype
	- The history constraint must be respected
		- Subtypes can only change inherited state elements accordingly with the allowed mechanisms present in the supertype
#### ISP: interface segregation principle
*The dependency of one class to another one should depend on the smallest possible interface.*

*Or: clients should not be forced to depend on methods they do not use.*

*Failing to respect this principle can lead to unneeded dependencies and to degenerate implementations of interfaces, causing needless complexity and potential violations of LSP.*
#### DIP: dependency inversion principle
Depend upon Abstractions. 
1) High level modules should not depend upon low level modules. Both should depend upon abstractions.
2) Abstractions should not depend upon details. Details should depend upon abstractions.
### Layered architectures
>All well structured object-oriented architectures have clearly-defined layers, with each layer providing some coherent set of services through a well-defined and controlled interface. 
>
>+G. Booch

*Layered is a family of very common architectural styles.*

*A naive application of the layered style can easily lead to a violation of the DIP.*

*A common solution is to make lower layers dependent upon a service interface declared in upper layers.*

![[Pasted image 20250601214149.png|300]]

[[(11) GRASP|Next.]]






