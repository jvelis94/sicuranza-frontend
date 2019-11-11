import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUndo } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estimates: [
                {
                    client: 'Rockwell',
                    project: 'HVAC',
                    emailDate: new Date(),
                    status: 'Not Done',
                }
            ],
            tasks: [
                {
                    task: 'finish app',
                    status: 'Not Done',
                }
            ],
            paidInvoices: 0,
            unpaidInvoices: 0
        }
    }

    render() {
        return (
            <div class="home-dashboard-admin">
                <section id='section-a-paid'>
                    <div>
                        <h2>${this.state.paidInvoices}</h2>
                        <h5 style={{textAlign: 'center'}}>Paid Invoices</h5>
                    </div>
                </section>
                <section id='section-a-unpaid'>
                    <div>
                        <h2>${this.state.unpaidInvoices}</h2>
                        <h5 style={{textAlign: 'center'}}>Unpaid Invoices</h5>
                    </div>
                </section>
                <section id='section-b'>
                    <h4>My Outstanding Estimates</h4>
                            <div id='estimate-todo-form'>
                                <label for='client'>Client:</label>
                                <label for='project'>Project:</label>
                                <label for='emailDate'>Email Date:</label>
                                <input type='text' name='client' />
                                <input type='text' name='project' />
                                <input type='text' name='emailDate' />
                            </div>
                            <button type='submit' className='btn btn-primary'>Add Estimate</button>
                        <br/>
                        <table id='estimate-todo-table'>
                            <thead>
                                <tr>
                                    <td>Client</td>
                                    <td>Project</td>
                                    <td>Email Date</td>
                                    <td>Status</td>
                                    <td colspan='2' style={{textAlign: 'center'}}>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                    {this.state.estimates.map(estimate => (
                                        <tr>
                                            <td>{estimate.client}</td>
                                            <td>{estimate.project}</td>
                                            <td>{estimate.emailDate.toString()}</td>
                                            <td>{estimate.status}</td>
                                            <td><FontAwesomeIcon icon={faCheck} /></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                </section>
                <section id='section-c'>
                    <h4>My Tasks</h4>
                        <label for='task'>Task:</label><br/>
                        <input type='text' name='task' />
                        <br />
                        <button type='submit' className='btn btn-primary'>Add Task</button>
                    <br/>
                    <table id='estimate-todo-table'>
                        <thead>
                            <tr>
                                <td>Task</td>
                                <td>Status</td>
                                <td colspan='2' style={{textAlign: 'center'}}>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tasks.map(task => (
                                <tr>
                                    <td>{task.task}</td>
                                    <td>{task.status}</td>
                                    <td><FontAwesomeIcon icon={faUndo} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}

export default Dashboard