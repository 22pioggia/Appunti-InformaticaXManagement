
***Modeling***
- A model is an (abstract) representation of reality.
- Models are used to capture relevant (from the point of view of the modeler) properties allowing more focused reasoning.
- Models are also useful to share knowledge.
- Creating models is a natural process.

- Models are expressed with languages.
- Languages are systems of signs for encoding and decoding information.
- Modeling languages define the **entities** composing the modeled subject, their **properties** and their **relationships**.

## O-O principles
- O-O is a paradigm that shift the focus of analysis and design from algorithms and data to objects, intended as autonomous entities with a state and a behavior.
- The main O-O principles are:
	- **Abstraction**: focus on essential characteristics (w.r.t. the perspective of the viewer).
	- **Encapsulation**: hide the details (your status).
	- **Inheritance**: behavior and state can be specialized.
		- Reuse of an existing object (prototype-based) or an existing class (class-based).
		- In some object models class-based inheritance implies sub-typing:
		- sub-class “is a” base-class.
		- In some object models sub classes can override (specialize) part of the behavior of the base class.
	- **Polymorphism**: behavior depends on who you are.
		- In languages supporting class-based inheritance as a sub-typing mechanism, an object instance of a sub-class can be used whenever a base-class type is required (sub-type polymorphism).
		- In Java, for example, object references can be polymorphic.
		- When a behavior is activated the outcome depends on the type of the object, not on the type of the reference (dynamic dispatching).
## Object oriented modeling with UML
- UML is a modeling language
- UML assumes on <u><b>object-oriented approach for both analysis and design</b></u>.
- Analysis focuses on the problem domain.
- Design focuses on the solution domain.
- UML supports both aspects (but it is agnostic with respect to how).

- UML is a modeling language for softwareintensive systems.
- It is a graphical, semi-formal language that is used to specify, visualize, construct and document software artifacts.
- Artifacts are the products of a software development process.

- UML is not a software development process.
- UML in independent from the project domain, from the development process, from specific programming languages and specific development tools.

- UML is a language, not just a graphical notation; it has syntactic rules and semantic rules.
- Syntactic rules define how to create valid diagrams.
- Semantic rules define how to create meaningful diagrams.

- UML is defined on top of an OMG modeling standard called MOF (Meta-Object Facility).
	- MOF is structured in 4 levels: **M0, M1, M2, M3**.
	- MOF-based languages (such as UML) can be serialized as defined by the XMI (XML Metadata Interchange) standard.

M1 e M2 in UML diagram
![[Pasted image 20250530185611.png]]
**Full Stack**
![[Pasted image 20250530185648.png]]

![[Pasted image 20250530185811.png]]

## UML grouping entities
![[Pasted image 20250530185921.png|]]
![[Pasted image 20250530185951.png]]
- Relationships correlate two or more elements in a model. They are represented as lines and can have names.
- 4 basic types of relationships:
	- Association
	- Generalization
	- Dependency
	- Realization

![[Pasted image 20250530190112.png]]
## OCL
- OCL (Object Constraint Language) is an OGM specification.
- It is a declarative language for describing rules that apply to Unified Modeling Language.
- It provides constraint and object query expressions.

***constraints***
- inv: invariant
- pre: precondition
- post: postcondition
- body: a query in a context
- init: initial value in a context 
- derive: define a derived attribute in a context

![[Pasted image 20250530190307.png|300]]

[[(3) UML - Use case diagrams|Next.]]
