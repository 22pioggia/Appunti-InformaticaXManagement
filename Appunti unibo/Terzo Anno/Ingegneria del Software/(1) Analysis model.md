Objectives of analysis model
1. **Understand** precisely what is required of the software
2. **Communicate** this understanding to development team members and stakeholders
3. **Define** a set of requirements that can be validated once the software is built

ISO/IEC/IEEE 29148:2011 
Main documents: 
- Stakeholder requirements specification document - **StRS**
- System requirements specification document - **SyRS**
- Software requirements specification document - **SRS**
## Requirements

**Stakeholder requirements** 
>*Requirements for a system that can provide the services needed by users and other stakeholders in a defined environment (**stakeholders' point of view**). They express the intended interaction the system will have with its operational environment and that are the reference against which each resulting operational service is validated.*

**System requirements** 
>*A specification, **from the supplier’s perspective**, of what characteristics, attributes, and functional and performance requirements the system is to possess, in order to satisfy the stakeholder requirements.*

**Phrase a requirement**
>*A requirement should use be as unambiguous as possible (controlled language).* 
- It should be phrased as one or mode sentences (one is better, if possible) containing a combination of: <u>subject(s), action(s), object(s), value(s), condition(s), constraint(s).</u>

Esempio
![[Pasted image 20250530181331.png]]

Altri esempi
- e.g.: At sea state 1 \[**Condition**], the Radar System shall detect targets at ranges out to \[**Action or Constraint**] 100 nautical miles \[**Value**].
- e.g.: The Invoice System \[**Subject**], shall display pending customer invoices \[**Action**] in ascending order \[**Value**] in which invoices are to be paid.

***Characteristics of a requirement***
- Unambiguous
- Consistent
- Complete
- Singular
- Feasible
- Traceable
- Verifiable

***Characteristics of a requirement set***
- Complete
- Consistent
- Affordable
- Bounded

***Requirements metadata***
- Identification
- Stakeholder Priority
- Dependency
- Risk
- Source
- Rationale
- Difficulty
- Type

Types of requirements
- **Functional** 
	- *describe the interactions between the system and its environment, independently from the implementation.*
- **Non-functional** 
	- *measurable/perceivable properties of the systems not directly related to functional aspects.*

![[Pasted image 20250530182415.png]]

FURPS+
- **Functional**: *features, capabilities, security.*
- **Usability**: *human factors, help, documentation.*
- **Reliability**: *frequency of failure, recoverability, predictability.*
- **Performance**: *response times, throughput, accuracy, availability, resource usage.*
- **Supportability**: *adaptability, maintainability, internationalization, configurability.*
- +: *implementation, interface, operations, packaging, legal.*

>**Elicitation** is a way to share a representation of the stakeholder mental model about the system. How can we do it?

***Elicit stakeholder requirements***
- Interviews, questionnaires
- Structured workshops with brainstorming
- Observation of environment or work patterns
- Technical documentation review
- Market analysis or competitive system assessment
- Simulations, prototyping, modelling
- ...

---
***!! Record the requirements !!***
- Record the requirements in a form suitable for requirements management through the life cycle and beyond.
- Consideration should be given to using a requirements management tool, especially for more complex projects. This tool should have the capability to trace linkages between requirements to show relationships.
---

[[(2) O-O modeling and UML|Next.]]
