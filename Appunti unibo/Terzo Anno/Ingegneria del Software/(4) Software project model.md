- **Process**: set of coordinated activities leading to a goal
- **Software process**: the goal is software production / deployment / evolution / maintenance

software process’s objectives 
- planning / organizing / running a software project within given constraints, such as
	- quality
	- time
	- cost (mostly resources, e.g. people)
- optimizing (and assessing) progress, risks (profit, customer satisfaction, ...)

The software lifecycle
- Specification 
- Design 
- Implementation
- Validation
- Evolution

Software is intangible, we may have lack of visibility, so we produce additional artifacts:
- Design documents/prototypes
- Reports
- Project/status meetings
- Client surveys (e.g. satisfaction level)

## The waterfall model 
*The waterfall model applies concepts from other engineering domains (manufacturing, construction, ...) to software production.*

*It is essentially composed by rigidly sequential activities.*
![[Pasted image 20250530210359.png]]

- **Pros** 
	- Easy to understand
	- Enforces good practices
	- Identifiable deliverables and milestones
	- Comprehensive documentation 
- **Cons**
	- Unrealistic
	- Late delivery 
	- Ineffective risk management
	- Hard to cope with changes
	- High overhead

## Spiral model
- Family of processes
- Risk-driven process model generator (phased reduction of risk)
	- The major distinguishing feature of the Spiral Model is that it creates a risk-driven approach to the software process. \[Boehm]
- Iterative model (cyclic approach)

![[Pasted image 20250530211402.png|500]]
- Each cycle starts with
	- Objectives
	- Alternatives
	- Constraints
- The next step is determined on the basis of the risks remaining
- Each cycle ends with a review from the stakeholders (mutual commitment)

- **Pros**
	- Reflects the iterative nature of software development
	- Good visibility
	- Risk assessment 
- **Cons**
	- Risk analysis is far from trivial
	- Complicated model, risks priorities could lead to late delivery
	- High overhead
## Unified Process 
*The Unified Process (**UP**) is an iterative and incremental software development process **framework**.* 

*The UP combines commonly accepted best practices, such as an iterative lifecycle and riskdriven development, into a cohesive and welldocumented process description.*

- Iterative and incremental
- Use case-driven
- Architecture-centric
- Risk focused

The Unified Process divides the project into four phases
- Inception
- Elaboration
- Construction
- Transition

![[Pasted image 20250530212404.png|400]]

![[Pasted image 20250530212422.png|500]]

- Inception
	- Goals – Business case/scope
		- *Use cases*
		- *Candidate architectures*
		- *Risk identification*
	- Ends with Lifecycle Objective Milestone
- **Elaboration**
	- Goals
		- *Address risks*
		- *Validate architecture*
	- En executable architecture baseline is implemented
	- Ends with a plan for the construction phase (includes costs and times)
- **Construction**
	- Goal
		- *Implement system features*
	- Uses timeboxed iterations producing a release
	- Incremental refinement
- **Transition**
	- Goals
		- Deploy the system
		- User engagement
		- Collect feedback
	- Also includes training

***Most known implementations***
- Rational Unified Process (RUP)
- Agile Unified Process
- Open Unified Process (OpenUP)
- Oracle Unified Method

[[(5) UML - Class diagram essentials|Next.]]







